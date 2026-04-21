import { Component, ChangeDetectionStrategy, inject, AfterViewInit, ElementRef, viewChildren } from '@angular/core';
import { I18nService } from '../i18n.service';
import { animate, stagger, inView } from 'motion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-services',
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section #animateSection class="opacity-0 flex flex-col gap-10 mt-10 max-w-6xl mx-auto">
      <div class="text-center max-w-3xl mx-auto mb-8 sec-stagger opacity-0 relative">
        <div class="absolute -inset-10 bg-[#38BDF8]/5 blur-3xl rounded-full scale-75 opacity-50 pointer-events-none"></div>
        <h2 class="text-lg font-semibold tracking-[0.2em] uppercase text-tech mb-6 relative z-10">{{ t().ecosystem }}</h2>
        <p class="text-xl opacity-80 font-light leading-relaxed relative z-10">{{ t().ecosystemDesc }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Agrotech -->
        <div class="sec-stagger opacity-0 bg-white/[0.02] p-8 border border-white/5 hover:border-[#38BDF8]/50 rounded-3xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden shadow-sm hover:shadow-[0_15px_40px_rgba(56,189,248,0.15)] flex flex-col items-center text-center">
          <div class="absolute inset-0 bg-gradient-to-b from-[#38BDF8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <mat-icon class="text-tech mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all !text-4xl w-10 h-10 group-hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]">agriculture</mat-icon>
          <h3 class="text-lg font-bold mb-4 tracking-wide text-white group-hover:text-tech transition-colors relative z-10">{{ t().svcAgrTitle }}</h3>
          <p class="text-sm text-white/50 leading-relaxed font-light relative z-10">{{ t().svcAgrDesc }}</p>
        </div>
        
        <!-- Biometrics -->
        <div class="sec-stagger opacity-0 bg-white/[0.02] p-8 border border-white/5 hover:border-[#38BDF8]/50 rounded-3xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden shadow-sm hover:shadow-[0_15px_40px_rgba(56,189,248,0.15)] flex flex-col items-center text-center">
          <div class="absolute inset-0 bg-gradient-to-b from-[#38BDF8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <mat-icon class="text-tech mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all !text-4xl w-10 h-10 group-hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]">fingerprint</mat-icon>
          <h3 class="text-lg font-bold mb-4 tracking-wide text-white group-hover:text-tech transition-colors relative z-10">{{ t().svcBioTitle }}</h3>
          <p class="text-sm text-white/50 leading-relaxed font-light relative z-10">{{ t().svcBioDesc }}</p>
        </div>
        
        <!-- IoT Energy -->
        <div class="sec-stagger opacity-0 bg-white/[0.02] p-8 border border-white/5 hover:border-[#38BDF8]/50 rounded-3xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden shadow-sm hover:shadow-[0_15px_40px_rgba(56,189,248,0.15)] flex flex-col items-center text-center">
          <div class="absolute inset-0 bg-gradient-to-b from-[#38BDF8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <mat-icon class="text-tech mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all !text-4xl w-10 h-10 group-hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]">bolt</mat-icon>
          <h3 class="text-lg font-bold mb-4 tracking-wide text-white group-hover:text-tech transition-colors relative z-10">{{ t().svcIotTitle }}</h3>
          <p class="text-sm text-white/50 leading-relaxed font-light relative z-10">{{ t().svcIotDesc }}</p>
        </div>

        <!-- Govtech -->
        <div class="sec-stagger opacity-0 bg-white/[0.02] p-8 border border-white/5 hover:border-[#38BDF8]/50 rounded-3xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden shadow-sm hover:shadow-[0_15px_40px_rgba(56,189,248,0.15)] flex flex-col items-center text-center">
          <div class="absolute inset-0 bg-gradient-to-b from-[#38BDF8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <mat-icon class="text-tech mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all !text-4xl w-10 h-10 group-hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]">account_balance</mat-icon>
          <h3 class="text-lg font-bold mb-4 tracking-wide text-white group-hover:text-tech transition-colors relative z-10">{{ t().svcGovTitle }}</h3>
          <p class="text-sm text-white/50 leading-relaxed font-light relative z-10">{{ t().svcGovDesc }}</p>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent implements AfterViewInit {
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
