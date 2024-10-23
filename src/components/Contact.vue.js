import { ref } from 'vue';
import { GithubIcon, LinkedinIcon, InstagramIcon } from 'lucide-vue-next';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const socials = ref([
    { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/Guiller022005' },
    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com/in/josé-guillermo-paúl-díaz' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://instagram.com/pauldiazjoseguillermo' },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ id: ("contact"), ...{ class: ("contact") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("social-icons") }, });
    for (const [social] of __VLS_getVForSourceType((__VLS_ctx.socials))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ key: ((social.name)), href: ((social.url)), target: ("_blank"), rel: ("noopener noreferrer"), });
        const __VLS_0 = ((social.icon));
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ width: ("40px"), height: ("40px"), }));
        const __VLS_2 = __VLS_1({ width: ("40px"), height: ("40px"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://mail.google.com/mail/?view=cm&fs=1&to=pauldiazjoseguillermo@gmail.com&su=Contacto..."), target: ("_blank"), rel: ("noopener noreferrer"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/email.svg"), alt: ("Correo"), width: ("40px"), height: ("40px"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_styleScopedClasses['contact'];
    __VLS_styleScopedClasses['social-icons'];
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
            socials: socials,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
