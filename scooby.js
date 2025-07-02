// إنشاء آثار أقدام تتحرك تلقائيًا
document.body.insertAdjacentHTML('afterbegin', `
  <style>
    .scooby-tracks {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 100px;
      background: url('https://i.ibb.co/0jQ7Z0t/paw-print.png') repeat-x;
      animation: run 15s linear infinite;
      opacity: 0.4;
      z-index: -1;
    }
    @keyframes run { to { background-position: 1000px 0; } }
  </style>
  <div class="scooby-tracks"></div>
`);
