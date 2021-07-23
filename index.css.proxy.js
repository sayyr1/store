// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@media (min-width: 640px) {\n}\n\n@media (min-width: 768px) {\n}\n\n@media (min-width: 1024px) {\n}\n\n@media (min-width: 1280px) {\n}\n\n@media (min-width: 1536px) {\n}\n\n.table {\n  display: table\n}\n\n.grid {\n  display: grid\n}\n\n.w-80 {\n  width: 20rem\n}\n\n@-webkit-keyframes spin {\n  to {\n    transform: rotate(360deg)\n  }\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg)\n  }\n}\n\n@-webkit-keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0\n  }\n}\n\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0\n  }\n}\n\n@-webkit-keyframes pulse {\n  50% {\n    opacity: .5\n  }\n}\n\n@keyframes pulse {\n  50% {\n    opacity: .5\n  }\n}\n\n@-webkit-keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n            animation-timing-function: cubic-bezier(0.8,0,1,1)\n  }\n\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n            animation-timing-function: cubic-bezier(0,0,0.2,1)\n  }\n}\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n            animation-timing-function: cubic-bezier(0.8,0,1,1)\n  }\n\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n            animation-timing-function: cubic-bezier(0,0,0.2,1)\n  }\n}\n\n.items-center {\n  align-items: center\n}\n\n.justify-center {\n  justify-content: center\n}\n\n.text-center {\n  text-align: center\n}\n\n.text-blue-50 {\n  --tw-text-opacity: 1;\n  color: rgba(239, 246, 255, var(--tw-text-opacity))\n}\n\n.text-blue-800 {\n  --tw-text-opacity: 1;\n  color: rgba(30, 64, 175, var(--tw-text-opacity))\n}\n\n*, ::before, ::after {\n  --tw-shadow: 0 0 #0000\n}\n\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n*, ::before, ::after {\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}