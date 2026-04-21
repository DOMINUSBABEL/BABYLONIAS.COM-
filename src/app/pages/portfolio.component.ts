import { Component, ChangeDetectionStrategy, inject, AfterViewInit, ElementRef, viewChildren } from '@angular/core';
import { I18nService } from '../i18n.service';
import { animate, stagger, inView } from 'motion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-portfolio',
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section #animateSection class="opacity-0 flex flex-col gap-8 mt-10 max-w-5xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-6 border-b border-[#38BDF8]/20 pb-6 sec-stagger opacity-0 relative">
        <div class="absolute -bottom-px left-0 w-1/3 h-[1px] bg-gradient-to-r from-[#38BDF8] to-transparent"></div>
        <div>
          <h2 class="text-lg font-semibold tracking-widest uppercase text-white mb-3 drop-shadow-md">{{ t().portfolio }}</h2>
          <p class="text-sm opacity-60 font-light">{{ t().portfolioDesc }}</p>
        </div>
        <a href="https://github.com/DOMINUSBABEL" target="_blank" rel="noopener noreferrer" class="mt-6 md:mt-0 flex items-center gap-2 text-sm font-mono text-tech hover:text-white transition-all duration-300 border border-tech/30 hover:border-[#38BDF8] px-6 py-3 rounded-md bg-[#38BDF8]/[0.02] hover:bg-[#38BDF8]/10 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          <mat-icon class="text-base" aria-hidden="true">code</mat-icon> {{ t().viewGithub }}
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Repo 1 -->
        <div class="sec-stagger opacity-0 flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-[#38BDF8]/[0.02] hover:border-tech/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(56,189,248,0.05)]">
          <mat-icon class="text-white/30 mt-1 group-hover:text-tech transition-colors group-hover:scale-110 duration-300 group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">dns</mat-icon>
          <div>
            <h4 class="text-lg font-mono text-tech tracking-tighter mb-2 font-bold">{{ t().repo1 }}</h4>
            <p class="text-sm opacity-70 leading-relaxed font-light">{{ t().repo1Desc }}</p>
          </div>
        </div>
        
        <!-- Repo 2 -->
        <div class="sec-stagger opacity-0 flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-[#38BDF8]/[0.02] hover:border-tech/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(56,189,248,0.05)]">
          <mat-icon class="text-white/30 mt-1 group-hover:text-tech transition-colors group-hover:scale-110 duration-300 group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">psychology</mat-icon>
          <div>
            <h4 class="text-lg font-mono text-tech tracking-tighter mb-2 font-bold">{{ t().repo2 }}</h4>
            <p class="text-sm opacity-70 leading-relaxed font-light">{{ t().repo2Desc }}</p>
          </div>
        </div>

        <!-- Repo 3 -->
        <div class="sec-stagger opacity-0 flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-[#38BDF8]/[0.02] hover:border-tech/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(56,189,248,0.05)]">
          <mat-icon class="text-white/30 mt-1 group-hover:text-tech transition-colors group-hover:scale-110 duration-300 group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">hub</mat-icon>
          <div>
            <h4 class="text-lg font-mono text-tech tracking-tighter mb-2 font-bold">{{ t().repo3 }}</h4>
            <p class="text-sm opacity-70 leading-relaxed font-light">{{ t().repo3Desc }}</p>
          </div>
        </div>

        <!-- Repo 4 -->
        <div class="sec-stagger opacity-0 flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-[#38BDF8]/[0.02] hover:border-tech/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(56,189,248,0.05)]">
          <mat-icon class="text-white/30 mt-1 group-hover:text-tech transition-colors group-hover:scale-110 duration-300 group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">gavel</mat-icon>
          <div>
            <h4 class="text-lg font-mono text-tech tracking-tighter mb-2 font-bold">{{ t().repo4 }}</h4>
            <p class="text-sm opacity-70 leading-relaxed font-light">{{ t().repo4Desc }}</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PortfolioComponent implements AfterViewInit {
  private i18n = inject(I18nService);
  t = this.i18n.t;
  sections = viewChildren<ElementRef>('animateSection');

  ngAfterViewInit() {
    this.sections().forEach(sec => {
        inView(sec.nativeElement, () => {
           animate(sec.nativeElement, { opacity: [0, 1], y: [40, 0] }, { duration: 0.8, ease: "easeOut" });
           const items = sec.nativeElement.querySelectorAll('.sec-stagger');
           if (items.length) {
              animate(items, { opacity: [0, 1], y: [20, 0] }, { delay: stagger(0.15), duration: 0.6, ease: "easeOut" });
           }
        }, { margin: "-100px" });
    });
  }
}
