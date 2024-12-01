/*!
 * fetchHTML.js
 */
(function () {
  const fetchHTMLButtons = document.querySelectorAll('.js-fetchHTML');
  let fetchCounter = 0;

  const fetchData = (ev) => {
    ev.preventDefault();

    const fetchButton = ev.target;
    let { fetchUrl, fetchContainer, fetchLimit, text, textFetching, textError } =
      fetchButton.dataset;

    const url = new URL(window.location.href);

    if (url.searchParams.has('page')) {
      fetchCounter = parseInt(url.searchParams.get('page'));
    }

    fetchCounter++;

    url.searchParams.set('page', fetchCounter);
    window.history.pushState({}, '', url);
    const urlParams = window.location.search;

    fetchUrl = fetchUrl + urlParams;

    if (fetchCounter >= fetchLimit) {
      fetchButton.classList.add('d-none');
    }

    const req = new Request(fetchUrl, {
      method: 'GET',
    });

    fetchButton.innerText = textFetching;
    fetchButton.disabled = true;
    fetchButton.style.pointerEvents = 'none';

    const container = document.querySelector(fetchContainer);

    const enableFetchButton = () => {
      fetchButton.innerText = text;
      fetchButton.disabled = false;
      fetchButton.style.pointerEvents = 'all';
    };

    const checkError = (response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.text();
      } else {
        throw Error(response.status);
      }
    };

    const handleError = (error) => {
      console.warn('Fetch failed:', error.message);
      container &&
        container.insertAdjacentHTML(
          'afterend',
          `<p class="u-ta-center u-fs-big u-fw-bold u-c-red u-my-24">${textError}</p>`,
        );
      enableFetchButton();
    };

    const handleData = (HTML) => {
      const frag = document.createRange().createContextualFragment(HTML);
      container && container.appendChild(frag);
      enableFetchButton();
    };

    fetch(req).then(checkError).then(handleData).catch(handleError);
    // .finally();
  };

  if (fetchHTMLButtons.length) {
    fetchHTMLButtons.forEach((fetchBtn) => {
      fetchBtn.addEventListener('click', fetchData);
    });
  }
})();
