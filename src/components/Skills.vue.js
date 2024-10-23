import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const skills = ref([
    { image: '../src/assets/node.svg?height=200&width=300', name: 'Node.js', info: 'Crea aplicaciones rápidas en servidores.', flipped: false },
    { image: '../src/assets/nodeExpress.svg?height=200&width=300', name: 'Express', info: 'Facilita la creación de sitios web y servicios.', flipped: false },
    { image: '../src/assets/vue.svg?height=200&width=300', name: 'Vue.js', info: 'Hace las páginas web más rápidas e interactivas.', flipped: false },
    { image: '../src/assets/react.svg?height=200&width=300', name: 'React.js', info: 'Hace las páginas web más rápidas e interactivas.', flipped: false },
    { image: '../src/assets/javascript.svg?height=200&width=300', name: 'JavaScript', info: 'Da vida a las páginas web con interacción.', flipped: false },
    { image: '../src/assets/c++.svg?height=200&width=300', name: 'C++', info: 'Crea programas rápidos como videojuegos.', flipped: false },
    { image: '../src/assets/mysql.svg?height=200&width=300', name: 'MySQL', info: 'Almacena y organiza información en bases de datos.', flipped: false },
    { image: '../src/assets/mongo.svg?height=200&width=300', name: 'MongoDB', info: 'Guarda grandes volúmenes de datos de manera flexible.', flipped: false },
    { image: '../src/assets/python.svg?height=200&width=300', name: 'Python', info: 'Lenguaje fácil para múltiples tareas, como análisis de datos.', flipped: false },
    { image: '../src/assets/api.svg?height=200&width=300', name: 'APIs RESTful', info: 'Permiten que aplicaciones se comuniquen entre sí.', flipped: false },
    { image: '../src/assets/responsive.svg?height=200&width=300', name: 'Sitios web responsive', info: 'Adaptan un sitio para verse bien en cualquier dispositivo.', flipped: false },
    { image: '../src/assets/docker.svg?height=200&width=300', name: 'Docker', info: 'Adaptan un sitio para verse bien en cualquier dispositivo.', flipped: false },
]);
const flipCard = (skill) => {
    skill.flipped = !skill.flipped;
};
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ id: ("skills"), ...{ class: ("skills") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("skills-grid") }, });
    for (const [skill, index] of __VLS_getVForSourceType((__VLS_ctx.skills))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onMouseover: (...[$event]) => {
                    __VLS_ctx.flipCard(skill);
                } }, ...{ onMouseleave: (...[$event]) => {
                    __VLS_ctx.flipCard(skill);
                } }, key: ((skill.name)), ...{ class: ("skill-item") }, ...{ class: (({ 'half-width': index >= __VLS_ctx.skills.length - 2 })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card") }, ...{ class: (({ flipped: skill.flipped })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-front") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((skill.image)), alt: ("Imagen de {{ skill.name }}"), ...{ class: ("skill-image") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (skill.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-back") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (skill.info);
    }
    __VLS_styleScopedClasses['skills'];
    __VLS_styleScopedClasses['skills-grid'];
    __VLS_styleScopedClasses['skill-item'];
    __VLS_styleScopedClasses['half-width'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['flipped'];
    __VLS_styleScopedClasses['card-front'];
    __VLS_styleScopedClasses['skill-image'];
    __VLS_styleScopedClasses['card-back'];
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
            skills: skills,
            flipCard: flipCard,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
