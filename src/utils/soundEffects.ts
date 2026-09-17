/**
 * Audio Service for Xuan Yen (Do Can) Presentation
 * Uses the Web Audio API for zero-latency, high-fidelity procedural sound effects:
 * 1. Gentle page flip (tiếng lật trang sách giấy truyền thống)
 * 2. Spring bird chirp (tiếng chim én hót đón xuân du dương, nhẹ nhàng)
 * 3. Milestone / Quiz chime (tiếng chuông gió thanh tao)
 */

export type SoundMode = 'both' | 'page-flip' | 'bird-chirp' | 'muted';

export interface SoundSettings {
  volume: number; // 0 to 100
  isMuted: boolean;
  soundMode: SoundMode;
}

const STORAGE_KEY = 'xuan_yen_sound_settings';

const DEFAULT_SETTINGS: SoundSettings = {
  volume: 65,
  isMuted: false,
  soundMode: 'both',
};

class AudioService {
  private ctx: AudioContext | null = null;
  private settings: SoundSettings = DEFAULT_SETTINGS;
  private noiseBuffer: AudioBuffer | null = null;

  constructor() {
    this.loadSettings();
  }

  private loadSettings(): void {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        this.settings = { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
      }
    } catch {
      this.settings = DEFAULT_SETTINGS;
    }
  }

  public saveSettings(newSettings: Partial<SoundSettings>): SoundSettings {
    this.settings = { ...this.settings, ...newSettings };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.settings));
    } catch {
      // Ignore localStorage errors
    }
    return this.settings;
  }

  public getSettings(): SoundSettings {
    return { ...this.settings };
  }

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;

    if (!this.ctx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    return this.ctx;
  }

  /**
   * Helper to generate a pink/white noise buffer for paper rustling
   */
  private getNoiseBuffer(ctx: AudioContext): AudioBuffer {
    if (this.noiseBuffer) return this.noiseBuffer;

    const bufferSize = ctx.sampleRate * 0.35; // 350ms of noise
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);

    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      // Soft pink noise filter
      output[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = output[i];
      output[i] *= 3.5; // boost slightly before filter
    }

    this.noiseBuffer = buffer;
    return buffer;
  }

  /**
   * Calculates effective volume multiplier based on volume slider and mute state
   */
  private getEffectiveVolume(overrideVolume?: number): number {
    if (this.settings.isMuted) return 0;
    const vol = overrideVolume !== undefined ? overrideVolume : this.settings.volume;
    return Math.max(0, Math.min(1, vol / 100));
  }

  /**
   * 1. Hiệu ứng lật trang sách (Realistic Page Flip Effect)
   * Tạo âm thanh xào xạc nhẹ nhàng của trang giấy truyền thống
   */
  public playPageFlip(customVolume?: number): void {
    const vol = this.getEffectiveVolume(customVolume);
    if (vol <= 0) return;

    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, now);
      masterGain.gain.linearRampToValueAtTime(vol * 0.28, now + 0.03);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.26);
      masterGain.connect(ctx.destination);

      // Noise source (paper texture)
      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = this.getNoiseBuffer(ctx);

      // Dynamic Bandpass filter to simulate page whoosh
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.Q.value = 2.2;
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.linearRampToValueAtTime(2400, now + 0.08);
      filter.frequency.exponentialRampToValueAtTime(650, now + 0.25);

      noiseSource.connect(filter);
      filter.connect(masterGain);

      // Subtle low-frequency body sound (the weight of the page turning)
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(140, now);
      subOsc.frequency.exponentialRampToValueAtTime(45, now + 0.18);

      subGain.gain.setValueAtTime(vol * 0.12, now);
      subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

      subOsc.connect(subGain);
      subGain.connect(masterGain);

      noiseSource.start(now);
      subOsc.start(now);

      noiseSource.stop(now + 0.28);
      subOsc.stop(now + 0.2);
    } catch (e) {
      console.warn('Audio playback error (page flip):', e);
    }
  }

  /**
   * 2. Tiếng chim én hót mùa xuân (Spring Swallow Chirping)
   * Hai tiếng lảnh lót nối tiếp nhau mang âm hưởng mùa xuân thi vị của bài thơ "Xuân Yến"
   */
  public playBirdChirp(customVolume?: number): void {
    const vol = this.getEffectiveVolume(customVolume);
    if (vol <= 0) return;

    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const masterGain = ctx.createGain();
      masterGain.connect(ctx.destination);

      // Chirp 1: First soft upward trill (0ms -> 75ms)
      const chirp1 = (startTime: number, baseFreq: number, peakFreq: number, duration: number, gainMul: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(baseFreq, startTime);
        osc.frequency.linearRampToValueAtTime(peakFreq, startTime + duration * 0.45);
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.95, startTime + duration);

        gain.gain.setValueAtTime(0.0001, startTime);
        gain.gain.linearRampToValueAtTime(vol * 0.14 * gainMul, startTime + duration * 0.3);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

        // Soft harmonic overtone for natural timbre
        const overtone = ctx.createOscillator();
        const overtoneGain = ctx.createGain();
        overtone.type = 'sine';
        overtone.frequency.setValueAtTime(baseFreq * 2, startTime);
        overtone.frequency.linearRampToValueAtTime(peakFreq * 2, startTime + duration * 0.45);
        overtone.frequency.exponentialRampToValueAtTime(baseFreq * 1.9, startTime + duration);

        overtoneGain.gain.setValueAtTime(0.0001, startTime);
        overtoneGain.gain.linearRampToValueAtTime(vol * 0.03 * gainMul, startTime + duration * 0.3);
        overtoneGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

        osc.connect(gain);
        overtone.connect(overtoneGain);
        gain.connect(masterGain);
        overtoneGain.connect(masterGain);

        osc.start(startTime);
        overtone.start(startTime);
        osc.stop(startTime + duration + 0.02);
        overtone.stop(startTime + duration + 0.02);
      };

      // Play double swallow chirp: quick first chirp, pause 45ms, melodious second chirp
      chirp1(now + 0.02, 3200, 4600, 0.075, 0.9);
      chirp1(now + 0.13, 3600, 5200, 0.095, 1.1);
      chirp1(now + 0.24, 4100, 4900, 0.065, 0.7);
    } catch (e) {
      console.warn('Audio playback error (bird chirp):', e);
    }
  }

  /**
   * 3. Phát âm thanh chuyển slide tự động dựa trên cài đặt SoundMode:
   * - 'both': Tiếng lật trang kèm tiếng én hót nhẹ ở hậu cảnh
   * - 'page-flip': Chỉ tiếng lật trang
   * - 'bird-chirp': Chỉ tiếng chim én hót
   * - 'muted': Không phát âm thanh
   */
  public playSlideTransition(): void {
    if (this.settings.isMuted) return;

    switch (this.settings.soundMode) {
      case 'both':
        this.playPageFlip();
        // Delay bird chirp slightly by 80ms so the page flip leads into the song
        setTimeout(() => {
          this.playBirdChirp();
        }, 80);
        break;
      case 'page-flip':
        this.playPageFlip();
        break;
      case 'bird-chirp':
        this.playBirdChirp();
        break;
      case 'muted':
      default:
        break;
    }
  }

  /**
   * 4. Tiếng chuông gió cổ điển chúc mừng / trả lời đúng câu hỏi
   */
  public playCelebrationChime(): void {
    const vol = this.getEffectiveVolume();
    if (vol <= 0) return;

    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 (Ngũ cung phương Đông)

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);

        gain.gain.setValueAtTime(0.0001, now + idx * 0.07);
        gain.gain.linearRampToValueAtTime(vol * 0.15, now + idx * 0.07 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.07 + 0.6);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.65);
      });
    } catch (e) {
      console.warn('Audio playback error (chime):', e);
    }
  }
}

export const soundEffects = new AudioService();
