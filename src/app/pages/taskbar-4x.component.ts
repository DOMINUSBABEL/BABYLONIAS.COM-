import { Component, ChangeDetectionStrategy, AfterViewInit, ElementRef, viewChildren } from '@angular/core';
import { animate, stagger, inView } from 'motion';

@Component({
  selector: 'app-taskbar-4x',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section #animateSection class="opacity-0 flex flex-col gap-12 mt-6 max-w-6xl mx-auto pb-16">
      <!-- Encabezado Hero -->
      <div class="text-center max-w-4xl mx-auto sec-stagger opacity-0 relative">
        <div class="absolute -inset-10 bg-[#38BDF8]/5 blur-3xl rounded-full scale-75 opacity-40 pointer-events-none"></div>
        <div class="inline-block px-4 py-1.5 border border-red-500/20 rounded text-[10px] tracking-widest text-red-400 mb-6 bg-red-500/5 font-mono uppercase">
          PROPIEDAD PRIVADA COMERCIAL • BABYLON.IA S.A.S.
        </div>
        <h2 class="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 relative z-10">
          TASK BAR <span class="text-tech drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">4X</span>
        </h2>
        <p class="text-lg md:text-xl opacity-80 font-light leading-relaxed relative z-10 max-w-2xl mx-auto">
          El simulador 4X e histórico definitivo diseñado específicamente para coexistir de forma no intrusiva con tu flujo de trabajo en la barra de tareas.
        </p>
      </div>

      <!-- Preview de Interfaz (Mockup) -->
      <div class="sec-stagger opacity-0 border border-white/5 rounded-3xl overflow-hidden bg-white/[0.01] hover:border-[#38BDF8]/20 transition-all duration-700 shadow-2xl relative group">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tech to-transparent opacity-40"></div>
        <img src="/task_bar_hero_mockup" 
             class="w-full h-auto object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-700" 
             src="/taskbar_4x_ui_mockup.jpg" 
             alt="Mockup de la Interfaz del Juego en la Barra de Tareas" />
        <div class="p-6 bg-black/60 backdrop-blur-md border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h4 class="text-white font-bold tracking-wide">HUD Compacto (48px) - Edad Espacial</h4>
            <p class="text-xs text-white/50 font-light">Visualización del mapa lineal 1D, flujos logísticos de recursos en tiempo real y alertas militares.</p>
          </div>
          <a href="/downloads/taskbar_4x_alpha.msi" 
             download="taskbar_4x_alpha.msi"
             class="px-6 py-3 bg-tech text-black hover:bg-white hover:text-black font-bold text-xs tracking-widest uppercase transition-all duration-300 rounded shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-white/20">
            Descargar Alpha (Windows x64 - MSI)
          </a>
        </div>
      </div>

      <!-- Dos Modos de Juego -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sec-stagger opacity-0">
        <div class="bg-white/[0.01] p-8 border border-white/5 hover:border-tech/30 rounded-3xl transition-all duration-500 relative overflow-hidden group">
          <div class="absolute -right-16 -top-16 w-32 h-32 bg-tech/5 rounded-full blur-2xl group-hover:scale-125 transition-transform"></div>
          <h3 class="text-xl font-bold mb-4 tracking-wide text-tech">🖥️ Modo Barra de Tareas</h3>
          <p class="text-sm text-white/50 leading-relaxed font-light">
            Monitoreo pasivo continuo. Diseñado con la API Win32 AppBar para desplazar las ventanas de tu escritorio. Clics de paso a través (*passthrough*) automáticos en áreas transparentes e interacción rápida de 3 segundos mediante popovers esmerilados para no interrumpir tu jornada.
          </p>
        </div>
        
        <div class="bg-white/[0.01] p-8 border border-white/5 hover:border-tech/30 rounded-3xl transition-all duration-500 relative overflow-hidden group">
          <div class="absolute -right-16 -top-16 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:scale-125 transition-transform"></div>
          <h3 class="text-xl font-bold mb-4 tracking-wide text-purple-400">🪐 Modo Pantalla Completa</h3>
          <p class="text-sm text-white/50 leading-relaxed font-light">
            Despliega la profundidad táctica total del imperio con el atajo <kbd class="px-1.5 py-0.5 bg-white/10 rounded font-mono text-xs">Win + Alt + X</kbd>. Gestiona el mapa de campaña 2.5D, negocia tratados bilaterales en el gabinete diplomático, personaliza tus flotas y avanza en el árbol científico global.
          </p>
        </div>
      </div>

      <!-- Progresión e Investigaciones -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sec-stagger opacity-0">
        <div class="bg-white/[0.01] p-6 border border-white/5 rounded-2xl">
          <h4 class="font-bold text-white mb-2">⏳ 15 Edades Históricas</h4>
          <p class="text-xs text-white/40 leading-relaxed font-light">
            Guía a tu civilización desde la recolección rústica en la Edad de Piedra, a través del Feudalismo Medieval y la Revolución Industrial de Vapor, hasta la Singularidad cuántica estelar.
          </p>
        </div>
        <div class="bg-white/[0.01] p-6 border border-white/5 rounded-2xl">
          <h4 class="font-bold text-white mb-2">🌿 Decisiones de Legado</h4>
          <p class="text-xs text-white/40 leading-relaxed font-light">
            Árbol de 12 tecnologías por era divididas en 6 disciplinas (Militar, Economía, Política, Cultura, Tecnología y Religión). Cada una requiere una elección binaria que define un bufo y un reto para tu partida.
          </p>
        </div>
        <div class="bg-white/[0.01] p-6 border border-white/5 rounded-2xl">
          <h4 class="font-bold text-white mb-2">🎲 Rejugabilidad Rogue-like</h4>
          <p class="text-xs text-white/40 leading-relaxed font-light">
            Mapas galácticos generados procedimentalmente en cada incursión. Acumula *Polvo de Singularidad* tras el colapso de tu imperio y desbloquea mejoras pasivas permanentes en el Árbol de Legado Cósmico.
          </p>
        </div>
      </div>

      <!-- Especificaciones de Optimización -->
      <div class="bg-white/[0.01] p-8 border border-white/5 rounded-3xl sec-stagger opacity-0 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="max-w-2xl">
          <h3 class="text-lg font-bold mb-3 tracking-wide text-white">⚙️ Eficiencia de Nivel de Sistemas</h3>
          <p class="text-xs text-white/50 leading-relaxed font-light">
            TASK BAR 4X está construido nativamente en **Rust** usando **Direct2D** para el HUD. Su bucle reactivo basado en la función bloqueante <code class="text-tech font-mono">WaitMessage()</code> mantiene el consumo en exactamente **0.0% de CPU** y **<15MB de RAM** mientras está en segundo plano. Detiene toda la simulación gráfica si se detecta un software a pantalla completa.
          </p>
        </div>
        <div class="flex flex-col gap-2 w-full md:w-auto">
          <div class="px-4 py-2 border border-white/10 rounded text-center text-xs font-mono">RAM: ~10-15 MB</div>
          <div class="px-4 py-2 border border-white/10 rounded text-center text-xs font-mono">CPU: ~0.0% Idle</div>
        </div>
      </div>
    </section>
  `
})
export class Taskbar4xComponent implements AfterViewInit {
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
