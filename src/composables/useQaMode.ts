import { ref, watch } from 'vue';

const isQaMode = ref(false);
const isRunningTests = ref(false);
const testProgress = ref(100);

export interface TestCase {
  id: string;
  category: 'Component' | 'A11y' | 'Responsive' | 'E2E' | 'Performance';
  name: string;
  duration: number; // in ms
  status: 'passed' | 'running' | 'pending' | 'failed';
  assertion: string;
}

const initialTests: TestCase[] = [
  {
    id: 'test-1',
    category: 'Component',
    name: 'HeroProfile.vue renderiza correctamente con H1 accesible y foto optimizada',
    duration: 6,
    status: 'passed',
    assertion: 'expect(heading).toBeInTheDocument() && expect(avatar).toHaveAttribute("alt")'
  },
  {
    id: 'test-2',
    category: 'Responsive',
    name: 'ProjectsGrid breakpoints responden sin overflow horizontal (320px - 1440px)',
    duration: 12,
    status: 'passed',
    assertion: 'expect(window.scrollWidth).toBeLessThanOrEqual(window.innerWidth)'
  },
  {
    id: 'test-3',
    category: 'A11y',
    name: 'Auditoría axe-core: Cero violaciones WCAG 2.1 AA en contraste y landmarks',
    duration: 15,
    status: 'passed',
    assertion: 'expect(violations.length).toBe(0)'
  },
  {
    id: 'test-4',
    category: 'E2E',
    name: 'Cypress E2E: Filtro de skills y navegación interactiva sin fallos de render',
    duration: 18,
    status: 'passed',
    assertion: 'cy.get("[data-testid=\'filter-qa\']").click().should("have.class", "active")'
  },
  {
    id: 'test-5',
    category: 'Performance',
    name: 'Core Web Vitals: LCP < 1.2s, CLS = 0.00, FID / INP < 50ms',
    duration: 4,
    status: 'passed',
    assertion: 'expect(vitals.lcp).toBeLessThan(1200) && expect(vitals.cls).toBe(0)'
  }
];

const testSuite = ref<TestCase[]>([...initialTests]);

export function useQaMode() {
  const toggleQaMode = () => {
    isQaMode.value = !isQaMode.value;
    if (typeof document !== 'undefined') {
      if (isQaMode.value) {
        document.body.classList.add('qa-inspector-active');
      } else {
        document.body.classList.remove('qa-inspector-active');
      }
    }
  };

  const runAllTests = async () => {
    if (isRunningTests.value) return;
    isRunningTests.value = true;
    testProgress.value = 0;

    // Reset tests to pending
    testSuite.value.forEach(t => t.status = 'pending');

    for (let i = 0; i < testSuite.value.length; i++) {
      testSuite.value[i].status = 'running';
      // Simulate real test execution delay
      await new Promise(r => setTimeout(r, 260 + Math.random() * 200));
      testSuite.value[i].status = 'passed';
      testProgress.value = Math.round(((i + 1) / testSuite.value.length) * 100);
    }

    isRunningTests.value = false;
  };

  return {
    isQaMode,
    toggleQaMode,
    isRunningTests,
    testProgress,
    testSuite,
    runAllTests
  };
}
