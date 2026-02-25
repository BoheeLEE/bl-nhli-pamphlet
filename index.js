// Set up mobile page navigation

const mobileSetup = () => {
    const PAGE_LABELS = [
        "Event Info",
        "Programme",
        "Publishing",
        "Industry",
        "Policy, Law & Entrepreneurship",
        "Academia",
      ];

      const TOTAL = PAGE_LABELS.length;
      let currentPage = 0;

      const mobileContainer = document.querySelector('div.mobile');

      if (!mobileContainer) return;

      function goToPage(pageNum) {
        console.log(`Going to page ${pageNum + 1}`);
        console.log(currentPage);
        mobileContainer.querySelector(`#mobile-page-${currentPage + 1}`).classList.remove('active');
        mobileContainer.querySelector(`#indicator-${currentPage}`).classList.remove('active');
        currentPage = ((pageNum % TOTAL) + TOTAL) % TOTAL; // Handle negative numbers
        mobileContainer.querySelector(`#mobile-page-${currentPage + 1}`).classList.add('active');
        mobileContainer.querySelector(`#indicator-${currentPage}`).classList.add('active');
        document.getElementById('side-label').textContent = PAGE_LABELS[currentPage];
      }

      mobileContainer.querySelectorAll('.control-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const direction = btn.classList.contains('next') ? 1 : -1;
            goToPage(currentPage + direction);
        });
      });

      mobileContainer.querySelectorAll('.indicator-dot').forEach((dot) => {
        dot.addEventListener('click', () => {
            const pageNum = parseInt(dot.dataset.num, 10);
            goToPage(pageNum);
        });
      });
};

mobileSetup();