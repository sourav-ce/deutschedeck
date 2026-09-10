(() => {
  'use strict';
  const scenes = [
    ['Photos/optimized/Berlin Cathedral (Berliner Dom).webp', 'Find your words. Find your way.', 'Berlin Cathedral (Berliner Dom)'],
    ['Photos/optimized/Heidelberg, Germany.webp', 'A little wonder. A little German.', 'Heidelberg Castle and Old Town'],
    ['Photos/optimized/858127-Auleben-Thuringia-Germany-Houses-Fields.webp', 'Every street has a story.', 'Historic houses and fields in Auleben, Thuringia'],
    ['Photos/optimized/Schiller_monument_Weimar_Thuringia_Bing_4K_2560x1600.webp', 'Somewhere new starts with a sentence.', 'Schiller Monument in Weimar, Thuringia'],
    ['Photos/optimized/meduana-PdnseHuDFZU-unsplash.webp', 'Alpine serenity and crystal waters.', 'Eibsee and Zugspitze, Bavaria'],
    ['Photos/optimized/krakaton-kivWihz4OqY-unsplash.webp', 'Castles rising into the morning mist.', 'Neuschwanstein Castle, Bavaria'],
    ['Photos/optimized/landscape-grass-sky-field-clouds-yellow-847380-wallhere.com.webp', 'Open skies over golden meadows.', 'German Countryside'],
    ['Photos/optimized/dana-ward-UMNUlMEhqXQ-unsplash.webp', 'Gothic spires carved against the sky.', 'Cologne Cathedral'],
    ['Photos/optimized/daniel-sessler-5qMYjPb_-Zg-unsplash.webp', 'Where journeys begin and stories unfold.', 'Bavarian Alpine Pass'],
    ['Photos/optimized/deniz-fuchidzhiev-Nq_VgwEnPwg-unsplash.webp', 'Wander through timeless cobblestones.', 'Historic German architecture'],
    ['Photos/optimized/martin-katler-38GqxGHP8lM-unsplash.webp', 'Echoes of centuries past.', 'Historic German landmark'],
    ['Photos/optimized/thumb-1920-1262444.webp', 'Golden light on rolling hills.', 'Panoramic German landscape']
  ];
  const pages = ['cards', 'board', 'tenses', 'browse', 'progress', 'quiz'];
  let previous = -1;
  try { previous = Number(sessionStorage.getItem('dd_background_photo') ?? -1); } catch {}
  const choices = scenes.map((_, i) => i).filter(i => i !== previous);
  const selected = choices[Math.floor(Math.random() * choices.length)];
  try { sessionStorage.setItem('dd_background_photo', String(selected)); } catch {}

  const backgroundUrl = encodeURI(scenes[selected][0]);

  document.body.classList.add('photo-background');
  document.body.insertAdjacentHTML('beforeend', `<a class="background-credit" href="${backgroundUrl}" target="_blank" rel="noopener noreferrer">Germany · Photos ↗</a>`);

  // Asynchronous image pre-decoding for butter-smooth visual transition
  const preloadImg = new Image();
  preloadImg.src = backgroundUrl;
  const reveal = (url) => {
    document.body.style.setProperty('--page-photo', `url("${url}")`);
    requestAnimationFrame(() => {
      document.body.classList.add('photo-loaded');
    });
  };

  if (typeof preloadImg.decode === 'function') {
    preloadImg.decode()
      .then(() => reveal(backgroundUrl))
      .catch(() => reveal(backgroundUrl));
  } else {
    preloadImg.onload = () => reveal(backgroundUrl);
    preloadImg.onerror = () => reveal(backgroundUrl);
  }

  document.body.insertAdjacentHTML('beforeend', `<svg width="0" height="0" aria-hidden="true" style="position:absolute;pointer-events:none"><defs><filter id="switcher" x="-20%" y="-20%" width="140%" height="140%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.015 0.03" numOctaves="2" seed="3" result="noise"/><feGaussianBlur in="noise" stdDeviation="1.5" result="smooth"/><feDisplacementMap in="SourceGraphic" in2="smooth" scale="12" xChannelSelector="R" yChannelSelector="G"/></filter><filter id="liquid-refraction" x="-20%" y="-20%" width="140%" height="140%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.025" numOctaves="2" seed="8" result="ripple"/><feGaussianBlur in="ripple" stdDeviation="2" result="smooth"/><feDisplacementMap in="SourceGraphic" in2="smooth" scale="26" xChannelSelector="R" yChannelSelector="G"/></filter><filter id="card-refraction" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed="5" result="wave"/><feDisplacementMap in="SourceGraphic" in2="wave" scale="7" xChannelSelector="R" yChannelSelector="G"/></filter></defs></svg>`);

  // Atmospheric background is maintained, while screens use rich multi-photo playful collages
  window.decoratePhotoPage = () => {};
})();

