import {
  AnimationCallbackEvent,
  Component,
  computed,
  input,
  model,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'pf-animate-letters',
  imports: [],
  templateUrl: './animate-letters.html',
  styleUrl: './animate-letters.scss',
})
export class AnimateLetters implements OnInit {
  letters = input<string>('');

  // animation delay before starting in milliseconds
  delay = input<number>(0);

  random = input(false);

  fromAnimation = model<any[]>([
    {
      transform: 'translateY(100%)',
      opacity: '0%',
    },
    {
      transform: 'translateY(0%)',
      opacity: '100%',
    },
  ]);

  show = signal(false);

  keyframeOptions = input<KeyframeAnimationOptions>({
    duration: 1000,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  });

  lettersArr = computed(() => {
    return this.letters()
      .split('')
      .map((letter, index) => ({
        letter,
        id: index + 1,
      }));
  });

  ngOnInit(): void {
    setTimeout(() => this.show.set(true), this.delay());
  }

  #initializeAnimation(): void {}

  enterAnimation(e: AnimationCallbackEvent, index: number): void {
    const target = e.target as HTMLElement;
    const animateElement = () => {
      const animations = target.animate(
        this.fromAnimation(),
        this.keyframeOptions()
      );
      animations.onfinish = () => e.animationComplete();
    }
    if (this.random() && this.randomNumber(0, 1)) {
      animateElement();
    } else {
      animateElement();
    }
  }

  randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
