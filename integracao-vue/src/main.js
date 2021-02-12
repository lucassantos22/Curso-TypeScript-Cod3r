"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(require("vue"));
const App_vue_1 = __importDefault(require("./App.vue"));
vue_1.default.config.productionTip = false;
new vue_1.default({
    render: h => h(App_vue_1.default),
}).$mount('#app');
//# sourceMappingURL=main.js.map