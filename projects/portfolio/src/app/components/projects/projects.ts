import { Component, ElementRef, inject, input,OnInit } from '@angular/core';
import { JobData } from '@portfolio/job-data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

@Component({
  selector: 'pf-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  host: {
    class: 'no-scrollbar',
  }
})
export class Projects implements OnInit {

  projects = input<JobData[]>();

  el = inject<ElementRef<HTMLElement>>(ElementRef);

  ngOnInit(): void {}

}
