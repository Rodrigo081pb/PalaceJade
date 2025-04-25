import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Track {
  url: string;
  title: string;
  artist: string;
  src: string; // link para arquivo de áudio (mp3)
}

@Component({
  selector: 'app-polaroid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './polaroid.component.html'
})
export class PolaroidMusicComponent implements AfterViewInit {

  @ViewChild('audioPlayer') audioRef!: ElementRef<HTMLAudioElement>;

  tracks: Track[] = [
    {
      url: 'https://picsum.photos/id/1015/400/400',
      title: 'Chuva de Arroz',
      artist: 'Iuan Santana',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
    {
      url: 'https://picsum.photos/id/1025/400/400',
      title: 'Canção do Entardecer',
      artist: 'Luna Rosa',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {
      url: 'https://picsum.photos/id/1035/400/400',
      title: 'Sussurros no Ar',
      artist: 'Aurora Beats',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    }
  ];

  currentIndex = 0;
  playing = false;
  currentTime = 0;
  duration = 0;
  shuffle = false;
  repeat = false;

  ngAfterViewInit() {
    const audio = this.audioRef.nativeElement;
    audio.src = this.tracks[this.currentIndex].src;

    audio.addEventListener('loadedmetadata', () => {
      this.duration = audio.duration;
    });
    audio.addEventListener('timeupdate', () => {
      this.currentTime = audio.currentTime;
    });
    audio.addEventListener('ended', () => {
      if (this.repeat) {
        this.play();
      } else {
        this.next();
      }
    });
  }

  play() {
    this.audioRef.nativeElement.play();
    this.playing = true;
  }

  pause() {
    this.audioRef.nativeElement.pause();
    this.playing = false;
  }

  togglePlay() {
    this.playing ? this.pause() : this.play();
  }

  prev() {
    if (this.shuffle) {
      this.currentIndex = Math.floor(Math.random() * this.tracks.length);
    } else {
      this.currentIndex =
        (this.currentIndex - 1 + this.tracks.length) % this.tracks.length;
    }
    this.switchTrack();
  }

  next() {
    if (this.shuffle) {
      this.currentIndex = Math.floor(Math.random() * this.tracks.length);
    } else {
      this.currentIndex = (this.currentIndex + 1) % this.tracks.length;
    }
    this.switchTrack();
  }

  switchTrack() {
    const audio = this.audioRef.nativeElement;
    this.playing = false;
    audio.src = this.tracks[this.currentIndex].src;
    audio.load();
    this.play();
  }

  onSeek(event: Event) {
    const value = +(event.target as HTMLInputElement).value;
    this.audioRef.nativeElement.currentTime = value;
    this.currentTime = value;
  }

  toggleShuffle() {
    this.shuffle = !this.shuffle;
  }

  toggleRepeat() {
    this.repeat = !this.repeat;
  }

  goTo(index: number) {
    this.currentIndex = index;
    this.switchTrack();
  }

  formatTime(sec: number): string {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, '0');
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, '0');
    return `${m}:${s}`;
  }
}
