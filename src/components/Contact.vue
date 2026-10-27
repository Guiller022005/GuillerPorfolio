<template>
  <section id="contact" class="contact-section" data-testid="contact-section">
    <!-- Header -->
    <div class="section-header">
      <div class="section-pill" data-testid="contact-pill">
        <Mail :size="16" />
        <span>Hablemos de Oportunidades</span>
      </div>
      <h2 class="section-title">
        ¿Listo para llevar tu producto al <span class="gradient-text">Siguiente Nivel</span>?
      </h2>
      <p class="section-subtitle">
        Estoy disponible para posiciones como <strong>Desarrollador Frontend</strong>, 
        <strong>QA Automation Engineer</strong> o roles híbridos donde la calidad y el diseño van de la mano.
      </p>
    </div>

    <!-- Contact Grid -->
    <div class="contact-grid">
      <!-- Left Column: Quick Contact Info & Direct Channels -->
      <div class="contact-info-col">
        <!-- Direct Email Card with Copy Feature -->
        <div class="glass-card contact-channel-card" data-testid="contact-email-card">
          <div class="channel-icon-wrap icon-cyan">
            <Mail :size="24" />
          </div>
          <div class="channel-details">
            <span class="channel-label">Correo Electrónico</span>
            <span class="channel-value">pauldiazjoseguillermo@gmail.com</span>
          </div>
          <button 
            @click="copyEmail" 
            class="copy-btn" 
            :class="{ copied: emailCopied }"
            data-testid="copy-email-btn"
            title="Copiar correo al portapapeles"
          >
            <Check v-if="emailCopied" :size="16" />
            <Copy v-else :size="16" />
            <span>{{ emailCopied ? '¡Copiado!' : 'Copiar' }}</span>
          </button>
        </div>

        <!-- Direct WhatsApp / Phone Card -->
        <div class="glass-card contact-channel-card" data-testid="contact-phone-card">
          <div class="channel-icon-wrap icon-emerald">
            <Phone :size="24" />
          </div>
          <div class="channel-details">
            <span class="channel-label">WhatsApp Directo</span>
            <span class="channel-value">+57 317 800 1452</span>
          </div>
          <a 
            href="https://wa.me/573178001452?text=Hola%20José%20Guillermo,%20vi%20tu%20portafolio%20Frontend%20y%20QA%20y%20me%20gustaría%20conversar." 
            target="_blank" 
            rel="noopener noreferrer" 
            class="channel-action-btn btn-qa-small"
          >
            <span>Escribir</span>
            <ExternalLink :size="14" />
          </a>
        </div>

        <!-- Availability Details -->
        <div class="glass-card availability-card" data-testid="contact-availability-card">
          <h4 class="avail-title">Detalles de Disponibilidad</h4>
          <ul class="avail-list">
            <li>
              <span class="avail-dot"></span>
              <span><strong>Ubicación:</strong> Colombia (Remoto / Híbrido)</span>
            </li>
            <li>
              <span class="avail-dot"></span>
              <span><strong>Disponibilidad:</strong> Inmediata para contratos Full-Time</span>
            </li>
            <li>
              <span class="avail-dot"></span>
              <span><strong>Zona Horaria:</strong> UTC-5 (Excelente traslape con USA y LATAM)</span>
            </li>
            <li>
              <span class="avail-dot"></span>
              <span><strong>Idiomas:</strong> Español (Nativo), Inglés (Técnico / Lectura)</span>
            </li>
          </ul>
        </div>

        <!-- Social Media Badges -->
        <div class="social-channels" data-testid="social-channels-group">
          <a 
            v-for="social in socials" 
            :key="social.name" 
            :href="social.url" 
            target="_blank" 
            rel="noopener noreferrer"
            class="social-btn"
            :title="`Visitar perfil de ${social.name}`"
          >
            <component :is="social.icon" :size="20" />
            <span>{{ social.name }}</span>
          </a>
        </div>
      </div>

      <!-- Right Column: Interactive Quick Message Form -->
      <div class="contact-form-col">
        <div class="glass-card form-card" data-testid="contact-form-card">
          <h3 class="form-title">Envíame un Mensaje</h3>
          <p class="form-subtitle">Completa el formulario y te responderé en menos de 24 horas.</p>

          <form @submit.prevent="handleSubmit" class="quick-form" data-testid="quick-contact-form">
            <!-- Name Input -->
            <div class="form-group">
              <label for="contact-name" class="form-label">Tu Nombre o Empresa</label>
              <input 
                id="contact-name"
                v-model="formData.name"
                type="text" 
                class="form-input"
                placeholder="Ej. Sofía Gómez (Tech Recruiter)" 
                required
                data-testid="input-contact-name"
              />
            </div>

            <!-- Email Input -->
            <div class="form-group">
              <label for="contact-email" class="form-label">Tu Correo Electrónico</label>
              <input 
                id="contact-email"
                v-model="formData.email"
                type="email" 
                class="form-input"
                placeholder="sofia@empresa.com" 
                required
                data-testid="input-contact-email"
              />
            </div>

            <!-- Role Interest Select -->
            <div class="form-group">
              <label for="contact-interest" class="form-label">Área de Interés</label>
              <select 
                id="contact-interest" 
                v-model="formData.roleInterest" 
                class="form-select"
                data-testid="select-contact-interest"
              >
                <option value="frontend">Desarrollador Frontend (Vue / React / TS)</option>
                <option value="qa">QA Automation Engineer (Cypress / Vitest)</option>
                <option value="hybrid">Híbrido Frontend + QA</option>
                <option value="freelance">Proyecto Freelance / Consultoría</option>
              </select>
            </div>

            <!-- Message Textarea -->
            <div class="form-group">
              <label for="contact-message" class="form-label">Mensaje</label>
              <textarea 
                id="contact-message"
                v-model="formData.message"
                rows="4" 
                class="form-textarea"
                placeholder="Cuéntame sobre la vacante o proyecto..."
                required
                data-testid="textarea-contact-message"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit" 
              class="btn-primary submit-btn"
              data-testid="submit-contact-btn"
            >
              <Send :size="18" />
              <span>Enviar Mensaje</span>
            </button>
          </form>

          <!-- Success Alert Toast -->
          <div v-if="formSubmitted" class="form-success-banner" data-testid="form-success-toast">
            <CheckCircle2 :size="18" class="text-emerald" />
            <span>¡Gracias! Se ha abierto tu cliente de correo con los datos para enviar el mensaje.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Instagram 
} from 'lucide-vue-next';

const emailCopied = ref(false);
const formSubmitted = ref(false);

const formData = ref({
  name: '',
  email: '',
  roleInterest: 'frontend',
  message: ''
});

const socials = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/Guiller022005' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/josé-guillermo-paúl-díaz' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/pauldiazjoseguillermo' }
];

const copyEmail = async () => {
  // Instant visual feedback for the user
  emailCopied.value = true;
  setTimeout(() => {
    emailCopied.value = false;
  }, 2800);

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await Promise.race([
        navigator.clipboard.writeText('pauldiazjoseguillermo@gmail.com'),
        new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 400))
      ]);
    } else {
      throw new Error('Fallback needed');
    }
  } catch {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = 'pauldiazjoseguillermo@gmail.com';
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    } catch (_) {}
  }
};

const handleSubmit = () => {
  formSubmitted.value = true;
  const subject = encodeURIComponent(`Contacto Portafolio [${formData.value.roleInterest}] de ${formData.value.name}`);
  const body = encodeURIComponent(
    `Nombre: ${formData.value.name}\nCorreo: ${formData.value.email}\nÁrea de interés: ${formData.value.roleInterest}\n\nMensaje:\n${formData.value.message}`
  );
  
  // Open default mail client
  window.open(`mailto:pauldiazjoseguillermo@gmail.com?subject=${subject}&body=${body}`, '_blank');
};
</script>

<style scoped>
.contact-section {
  padding: 5rem 0 3rem;
  position: relative;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;
}

/* Left Column */
.contact-info-col {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.contact-channel-card {
  padding: 1.4rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.channel-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-cyan {
  background: rgba(56, 189, 248, 0.12);
  color: var(--primary);
  border: 1px solid rgba(56, 189, 248, 0.25);
}

.icon-emerald {
  background: rgba(16, 185, 129, 0.12);
  color: var(--accent-qa-light);
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.channel-details {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.channel-label {
  font-size: 0.78rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
  text-transform: uppercase;
}

.channel-value {
  font-size: 0.96rem;
  font-weight: 600;
  color: var(--text-main);
  word-break: break-all;
}

.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.85rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  font-size: 0.78rem;
  font-family: var(--font-mono);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.copy-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  color: var(--primary);
  border-color: var(--primary);
}

.copy-btn.copied {
  background: rgba(16, 185, 129, 0.2);
  border-color: var(--accent-qa);
  color: var(--accent-qa-light);
}

.btn-qa-small {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.95rem;
  border-radius: var(--radius-pill);
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.35);
  color: var(--accent-qa-light);
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.btn-qa-small:hover {
  background: var(--accent-qa);
  color: #040810;
}

/* Availability Card */
.availability-card {
  padding: 1.6rem;
}

.avail-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-main);
}

.avail-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.avail-list li {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.88rem;
  color: var(--text-secondary);
}

.avail-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-qa);
  flex-shrink: 0;
}

/* Socials */
.social-channels {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.1rem;
  border-radius: var(--radius-md);
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.social-btn:hover {
  border-color: var(--primary);
  background: rgba(56, 189, 248, 0.1);
  color: var(--primary);
  transform: translateY(-2px);
}

/* Right Column: Form */
.form-card {
  padding: 2.2rem;
}

.form-title {
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 0.35rem;
}

.form-subtitle {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.quick-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.form-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-main);
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  background: rgba(7, 11, 20, 0.8);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  font-family: var(--font-sans);
  font-size: 0.92rem;
  transition: all var(--transition-fast);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 12px var(--primary-glow);
}

.form-select option {
  background: #0D1527;
  color: #FFFFFF;
}

.submit-btn {
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.9rem;
}

.form-success-banner {
  margin-top: 1.2rem;
  padding: 0.85rem 1.1rem;
  border-radius: var(--radius-sm);
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.3);
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.85rem;
  color: var(--accent-qa-light);
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
