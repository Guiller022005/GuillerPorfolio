import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const projects = ref([
    {
        title: 'Plataforma de E-commerce',
        description: 'Una solución full-stack de comercio electrónico con gestión de inventario en tiempo real.',
        image: '../src/assets/ecomerce.png?height=200&width=300',
        url: 'https://guiller022005.github.io/ecommerCampusM1/?id=aps',
    },
    {
        title: 'SpaceX',
        description: 'Una aplicación web responsiva para la organización eficiente de tareas y colaboración en equipo.',
        image: '../src/assets/spaceX.png?height=200&width=300',
        url: 'https://guiller022005.github.io/SpaceX/',
    },
    {
        title: 'Plataforma de Cine',
        description: 'Una aplicación web para visualizar el catálogo de películas en cartelera y gestionar reservas.',
        image: '../src/assets/foodSite.png?height=200&width=300',
        url: 'https://guiller022005.github.io/proyectoWeb/',
    }
]);
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ id: ("projects"), ...{ class: ("projects") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("projects-grid") }, });
    for (const [project] of __VLS_getVForSourceType((__VLS_ctx.projects))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((project.title)), ...{ class: ("project-item") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((project.image)), alt: ((project.title)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("project-content") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
        (project.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (project.description);
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((project.url)), ...{ class: ("project-link") }, target: ("_blank"), rel: ("noopener noreferrer"), });
    }
    __VLS_styleScopedClasses['projects'];
    __VLS_styleScopedClasses['projects-grid'];
    __VLS_styleScopedClasses['project-item'];
    __VLS_styleScopedClasses['project-content'];
    __VLS_styleScopedClasses['project-link'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            projects: projects,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
