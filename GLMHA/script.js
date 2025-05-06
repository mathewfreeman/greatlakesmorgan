// script.js - Mobile Select Dropdowns for For Sale Section

document.addEventListener('DOMContentLoaded', function() {

    // --- Data ---
    const directoryData = [
         { Name: "Primus Morgans", Address: null, City: "Manchester", State: "MI", Email: "primusmorgans@gmail.com", Phone: "(517) 962-8149", Website: "mcgofffarm.com", Trainer: null, Focus: "Breeding traditional, \"old blooded\" Morgan horses...", Overview: "Primus Morgans, located in Manchester, Michigan..." },
        { Name: "Ancan Morgans", Address: null, City: "Davison", State: "MI", Email: "AncanMrgns@aol.com", Phone: null, Website: "ancanmorgans.com", Trainer: null, Focus: "Breeding beautiful, versatile Morgans...", Overview: "Ancan Morgans is dedicated to breeding beautiful..." },
        { Name: "Crystal Farms Equestrian Center", Address: null, City: "Marshall", State: "MI", Email: "crystalfarms12@gmail.com", Phone: "(269) 317-3910", Website: "crystalfarmsonline.com", Trainer: "Mary Carlton", Focus: "Training and instruction for Morgan horses...", Overview: "Crystal Farms, a family-owned and operated..." },
        { Name: "Mtn Top Morgans", Address: null, City: "Brooklyn", State: "MI", Email: "mtntopmorgans@yahoo.com", Phone: "(517) 414-6095", Website: "mtntopmorgans.tripod.com", Trainer: "Kristal Homoki", Focus: "Breeding classic, versatile Morgan horses...", Overview: "Mtn Top Morgans, located in Brooklyn, Michigan..." },
        { Name: "Twin Elm Training", Address: null, City: "Northville", State: "MI", Email: "twinelmtraining@gmail.com", Phone: "(248) 697-6503", Website: "twinelmtraining.com", Trainer: "Bobbie Jo Jaakkola", Focus: "Full-service training and lesson program...", Overview: "Established in 2004 and located on 40 acres..." },
        { Name: "Lookaway Farm", Address: null, City: "Medina", State: "OH", Email: "info@lookawayfarm.com", Phone: "(330) 620 8106", Website: "lookawayfarm.com", Trainer: "Brian Stewart", Focus: "Full-service breeding, training, showing...", Overview: "Lookaway Farm proudly continues a tradition..." },
        { Name: "Rodman Stables, LLC", Address: null, City: "Homerville", State: "OH", Email: null, Phone: "330.242.3081", Website: "rodmanstables.com", Trainer: "Yvonne Rodman-Sopata", Focus: "Training and lessons, helping clients enjoy...", Overview: "Rodman Stables provides training and lessons..." },
        { Name: "TRSW Morgans at Someday Farm", Address: null, City: "Kent", State: "OH", Email: "swalker@trswmorgans.com", Phone: "330.677.4378", Website: "trswmorgans.com", Trainer: "Terry Rutledge & Susan Walker", Focus: "Breeding focused on Serenity bloodlines...", Overview: "At TRSW Morgans, we strive to perpetuate..." },
    ];

    const saleHorseData = [
        {
            registeredName: "Ancan True Grit", barnName: "Maverick", state: "MI", city: "Davison",
            currentHome: "Ancan Morgans", primaryImage: "https://placehold.co/600x400/0a9396/white?text=Maverick+Photo+1",
            images: [ "https://placehold.co/600x400/0a9396/white?text=Maverick+Photo+1", "https://placehold.co/600x400/005f73/white?text=Maverick+Photo+2" ],
            pedigree: "Sire: Astronomicallee\nDam: Ancan Color Guard", salesPitch: "Stunning 2020 bay gelding...", showResults: "2024 Michigan Futurity - Top 5...",
            contactName: "Anne Wyland", contactEmail: "AncanMrgns@aol.com", contactPhone: null, dateListed: "2025-04-15"
        },
        {
            registeredName: "Lookaway's Leading Lady", barnName: "Diva", state: "OH", city: "Medina",
            currentHome: "Lookaway Farm", primaryImage: "https://placehold.co/600x400/e9d8a6/005f73?text=Diva+Photo+1",
            images: [ "https://placehold.co/600x400/e9d8a6/005f73?text=Diva+Photo+1" ],
            pedigree: "Sire: Ultras Special Agent\nDam: Lookaway's Debutante", salesPitch: "Elegant 2019 chestnut mare...", showResults: "2024 Gold Cup Regional - Reserve Champion...",
            contactName: "Brian Stewart", contactEmail: "info@lookawayfarm.com", contactPhone: "(330) 620 8106", dateListed: "2025-05-01"
        },
        {
            registeredName: "Primus Knight Rider", barnName: "Kit", state: "MI", city: "Manchester",
            currentHome: "Primus Morgans", primaryImage: "https://placehold.co/600x400/212529/white?text=Kit+Photo+1",
            images: [ "https://placehold.co/600x400/212529/white?text=Kit+Photo+1" ],
            pedigree: "Sire: Primus Blackhawk Knox\nDam: Primus First Lady", salesPitch: "Traditional type 2021 black colt...", showResults: null,
            contactName: "Primus Morgans", contactEmail: "primusmorgans@gmail.com", contactPhone: "(517) 962-8149", dateListed: "2025-03-20"
        }
    ];

    const eventData = { /* ... (event data remains the same) ... */ };

    // --- DOM Element References ---
    const mainNav = document.getElementById('main-nav');
    const mobileNavLinksContainer = mainNav?.querySelector('.nav-links.mobile-links');
    const mobileMenuToggle = mainNav?.querySelector('.mobile-menu-toggle');
    const directoryGridContainer = document.getElementById('directory-grid-container');
    const directoryFilterButtonsContainer = document.querySelector('.directory-filters');
    const forSaleGridContainer = document.getElementById('forsale-grid-container');
    const forSaleControlsContainer = document.querySelector('.forsale-controls');
    // Mobile select dropdowns
    const mobileFilterStateSelect = document.getElementById('mobile-filter-state');
    const mobileSortHorsesSelect = document.getElementById('mobile-sort-horses');

    const modal = document.getElementById('detail-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalButton = modal?.querySelector('.close-button');
    const emailSignupForm = document.getElementById('email-signup-form');
    const signupStatus = document.getElementById('signup-status');
    const yearSpan = document.getElementById('current-year');

    // --- State ---
    let currentDirectoryFilter = 'All';
    let currentSaleHorseFilter = 'All';
    let currentSaleHorseSort = 'name';
    let currentSlideshowIndex = 0;
    let currentSlideshowImages = [];
    let touchStartX = 0;
    let touchEndX = 0;

    // --- Navigation Logic ---
    // ... (navigation logic remains the same) ...
    document.querySelectorAll('#main-nav .nav-links a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = mainNav?.offsetHeight ?? 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                if (mobileNavLinksContainer && mobileNavLinksContainer.classList.contains('active') && this.closest('.nav-links.mobile-links')) {
                    mobileNavLinksContainer.classList.remove('active');
                    mobileMenuToggle?.querySelector('i')?.classList.replace('fa-times', 'fa-bars');
                }
            }
        });
    });
    window.addEventListener('scroll', () => {
        mainNav?.classList.toggle('scrolled', window.scrollY > 50);
        updateActiveNavLink();
    });
    function updateActiveNavLink() {
        let currentSectionId = '';
        const sections = document.querySelectorAll('main section[id]');
        const navHeightOffset = (mainNav?.offsetHeight ?? 0) + 10;
        sections.forEach(section => {
            if (window.pageYOffset >= section.offsetTop - navHeightOffset) {
                currentSectionId = section.getAttribute('id') ?? '';
            }
        });
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
            if (sections.length > 0) {
                 currentSectionId = sections[sections.length - 1].getAttribute('id') ?? '';
            }
        }
        if (sections.length > 0 && window.pageYOffset < sections[0].offsetTop - navHeightOffset) {
            currentSectionId = 'home';
        }
        mainNav?.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
        });
    }
    if (mobileMenuToggle && mobileNavLinksContainer) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileNavLinksContainer.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars', !mobileNavLinksContainer.classList.contains('active'));
                icon.classList.toggle('fa-times', mobileNavLinksContainer.classList.contains('active'));
            }
        });
    }

    // --- Directory Filtering and Rendering ---
    // ... (directory logic remains the same) ...
    function renderDirectory(filter = 'All') {
        if (!directoryGridContainer) return;
        directoryGridContainer.innerHTML = '';
        let filteredData = directoryData.filter(farm => filter === 'All' || farm.State === filter);
        filteredData.sort((a, b) => a.Name.toLowerCase().localeCompare(b.Name.toLowerCase()));

        if (filteredData.length === 0) {
            directoryGridContainer.innerHTML = '<p>No directory entries found matching the filter.</p>';
            return;
        }
        filteredData.forEach((farm) => {
            const originalIndex = directoryData.findIndex(item => item.Name === farm.Name && item.City === farm.City);
            const tile = document.createElement('div');
            tile.classList.add('directory-tile');
            const createEl = (tag, cls, txt, html = false) => {
                if (txt === null || typeof txt === 'undefined' || txt === '') return null;
                const el = document.createElement(tag);
                if (cls) el.className = cls;
                if (html) el.innerHTML = txt; else el.textContent = txt;
                return el;
            };
            const h3 = createEl('h3', null, farm.Name); if (h3) tile.appendChild(h3);
            const loc = createEl('p', 'location', `<i class="fas fa-map-marker-alt"></i> ${farm.City || ''}, ${farm.State || ''}`, true); if (loc) tile.appendChild(loc);
            const focus = createEl('p', 'focus', farm.Focus); if (focus) tile.appendChild(focus);
            const btn = createEl('button', 'btn btn-secondary open-modal-button', '<i class="fas fa-info-circle"></i> View Details', true);
            if (btn) {
                btn.setAttribute('data-modal-type', 'directory');
                btn.setAttribute('data-index', originalIndex.toString());
                tile.appendChild(btn);
            }
            directoryGridContainer.appendChild(tile);
        });
    }
    if (directoryFilterButtonsContainer) {
        directoryFilterButtonsContainer.addEventListener('click', (e) => {
            const target = e.target.closest('.btn-filter');
            if (target) {
                directoryFilterButtonsContainer.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
                target.classList.add('active');
                currentDirectoryFilter = target.dataset.filter ?? 'All';
                renderDirectory(currentDirectoryFilter);
            }
        });
    }
    if(directoryGridContainer) renderDirectory(currentDirectoryFilter);


    // --- Horses For Sale Filtering, Sorting, and Rendering ---
    function renderSaleHorses(filter = 'All', sort = 'name') {
        if (!forSaleGridContainer) return;
        forSaleGridContainer.innerHTML = '';
        let processedData = saleHorseData.filter(horse => filter === 'All' || horse.state === filter);

        if (sort === 'name') {
            processedData.sort((a, b) => a.registeredName.toLowerCase().localeCompare(b.registeredName.toLowerCase()));
        } else if (sort === 'date') {
            processedData.sort((a, b) => new Date(b.dateListed) - new Date(a.dateListed));
        }

        if (processedData.length === 0) {
            forSaleGridContainer.innerHTML = '<p>No horses found matching the criteria.</p>';
            return;
        }
        processedData.forEach((horse) => {
            const originalIndex = saleHorseData.findIndex(item => item.registeredName === horse.registeredName && item.barnName === horse.barnName);
            const tile = document.createElement('div');
            tile.classList.add('forsale-tile');
            const imgContainer = document.createElement('div');
            imgContainer.className = 'forsale-tile-image';
            const img = document.createElement('img');
            img.src = horse.primaryImage || 'https://placehold.co/600x400/cccccc/ffffff?text=No+Image';
            img.alt = `Photo of ${horse.registeredName || 'horse'}`;
            img.onerror = function() { this.onerror=null; this.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Error'; this.alt = 'Image loading error'; };
            imgContainer.appendChild(img);
            tile.appendChild(imgContainer);
            const contentContainer = document.createElement('div');
            contentContainer.className = 'forsale-tile-content';
            const createEl = (tag, cls, txt, html = false) => {
                 if (txt === null || typeof txt === 'undefined' || txt === '') return null;
                const el = document.createElement(tag);
                if (cls) el.className = cls;
                if (html) el.innerHTML = txt; else el.textContent = txt;
                return el;
            };
            const h3 = createEl('h3', null, horse.registeredName); if (h3) contentContainer.appendChild(h3);
            const bn = createEl('p', 'barn-name', horse.barnName); if (bn) contentContainer.appendChild(bn);
            const loc = createEl('p', 'location', `<i class="fas fa-map-marker-alt"></i> ${horse.city || ''}, ${horse.state || ''}`, true); if (loc) contentContainer.appendChild(loc);
            const btn = createEl('button', 'btn btn-secondary open-modal-button', '<i class="fas fa-info-circle"></i> View Horse Details', true);
             if (btn) {
                btn.setAttribute('data-modal-type', 'forsale');
                btn.setAttribute('data-index', originalIndex.toString());
                contentContainer.appendChild(btn);
            }
            tile.appendChild(contentContainer);
            forSaleGridContainer.appendChild(tile);
        });
    }

    // Event listener for DESKTOP "Horses For Sale" controls
    if (forSaleControlsContainer) {
        const desktopFilterButtons = forSaleControlsContainer.querySelectorAll('.desktop-controls .btn-filter');
        const desktopSortButtons = forSaleControlsContainer.querySelectorAll('.desktop-controls .btn-sort');

        desktopFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                desktopFilterButtons.forEach(b => b.classList.remove('active'));
                button.classList.add('active');
                currentSaleHorseFilter = button.dataset.filter ?? 'All';
                renderSaleHorses(currentSaleHorseFilter, currentSaleHorseSort);
            });
        });

        desktopSortButtons.forEach(button => {
            button.addEventListener('click', () => {
                desktopSortButtons.forEach(b => b.classList.remove('active'));
                button.classList.add('active');
                currentSaleHorseSort = button.dataset.sort ?? 'name';
                renderSaleHorses(currentSaleHorseFilter, currentSaleHorseSort);
            });
        });
    }

    // Event listeners for MOBILE "Horses For Sale" select dropdowns
    if (mobileFilterStateSelect) {
        mobileFilterStateSelect.addEventListener('change', (e) => {
            currentSaleHorseFilter = e.target.value;
            renderSaleHorses(currentSaleHorseFilter, currentSaleHorseSort);
        });
    }
    if (mobileSortHorsesSelect) {
        mobileSortHorsesSelect.addEventListener('change', (e) => {
            currentSaleHorseSort = e.target.value;
            renderSaleHorses(currentSaleHorseFilter, currentSaleHorseSort);
        });
    }

    // Initial render of horses for sale
    if(forSaleGridContainer) {
        // Set initial values for mobile selects if they exist
        if (mobileFilterStateSelect) mobileFilterStateSelect.value = currentSaleHorseFilter;
        if (mobileSortHorsesSelect) mobileSortHorsesSelect.value = currentSaleHorseSort;
        renderSaleHorses(currentSaleHorseFilter, currentSaleHorseSort);
    }


    // --- Modal Logic ---
    // ... (modal logic remains the same) ...
    function createDetailHTML(label, value, iconClass = null, linkType = null, isTextArea = false, extraClass = '') {
        if (value !== null && typeof value !== 'undefined' && value !== '') {
            let content = '';
            if (linkType === 'email') content = `<a href="mailto:${value}">${value}</a>`;
            else if (linkType === 'phone') content = `<a href="tel:${value}">${value}</a>`;
            else if (linkType === 'web') { const url = value.startsWith('http') ? value : `http://${value}`; content = `<a href="${url}" target="_blank" rel="noopener noreferrer">${value}</a>`; }
            else content = typeof value === 'string' ? value.replace(/\n/g, '<br>') : value;
            const iconHTML = iconClass ? `<i class="${iconClass}"></i>` : '';
            if (isTextArea) return `<div class="modal-detail-section ${extraClass}"><strong>${iconHTML}${label}</strong><p>${content}</p></div>`;
            if (['Name', 'Email', 'Phone'].includes(label)) return `<p class="modal-contact-line ${extraClass}"><strong>${iconHTML}${label}:</strong> ${content}</p>`;
            return `<p class="${extraClass}"><strong>${iconHTML}${label}:</strong> ${content}</p>`;
        }
        return '';
    }
    function openModal(content) {
        if (modal && modalBody) {
            modalBody.innerHTML = content;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            setTimeout(() => closeModalButton?.focus(), 50);
            document.addEventListener('keydown', handleModalKeydown);
        } else { console.error("Modal elements not found."); }
    }
    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
            if (modalBody) modalBody.innerHTML = '';
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleModalKeydown);
            const slideshowContainer = modal.querySelector('.modal-image-slideshow');
            if (slideshowContainer) {
                slideshowContainer.removeEventListener('touchstart', handleTouchStart);
                slideshowContainer.removeEventListener('touchmove', handleTouchMove);
                slideshowContainer.removeEventListener('touchend', handleTouchEnd);
            }
        }
    }
    document.body.addEventListener('click', function(event) {
        const button = event.target.closest('.open-modal-button');
        if (button) {
            const modalType = button.getAttribute('data-modal-type');
            const dataIndexStr = button.getAttribute('data-index');
            const eventId = button.getAttribute('data-event-id');
            const dataIndex = dataIndexStr !== null ? parseInt(dataIndexStr, 10) : -1;

            if (modalType === 'directory' && dataIndex !== -1 && dataIndex < directoryData.length) {
                const farm = directoryData[dataIndex];
                let modalHTML = `<h2>${farm.Name || 'Details'}</h2>`;
                modalHTML += createDetailHTML('Location', `${farm.City || ''}, ${farm.State || ''}`, 'fas fa-map-marker-alt');
                modalHTML += createDetailHTML('Trainer', farm.Trainer, 'fas fa-user');
                modalHTML += createDetailHTML('Focus', farm.Focus, 'fas fa-bullseye');
                modalHTML += createDetailHTML('Phone', farm.Phone, 'fas fa-phone', 'phone');
                modalHTML += createDetailHTML('Email', farm.Email, 'fas fa-envelope', 'email');
                modalHTML += createDetailHTML('Website', farm.Website, 'fas fa-globe', 'web');
                modalHTML += createDetailHTML('Overview', farm.Overview, 'fas fa-info-circle', null, true);
                openModal(modalHTML);
            } else if (modalType === 'event' && eventId && eventData[eventId]) {
                 const eventDetails = eventData[eventId];
                 let modalHTML = `<div class="event-modal-title"><i class="fas fa-calendar-check"></i><h2>${eventDetails.name || 'Event Details'}</h2></div>`;
                 modalHTML += `<div class="event-modal-details">`;
                 modalHTML += createDetailHTML('Date', eventDetails.date, 'fas fa-calendar-alt');
                 modalHTML += createDetailHTML('Location', eventDetails.location, 'fas fa-map-marker-alt');
                 if (eventDetails.description) modalHTML += `<p class="event-description">${eventDetails.description.replace(/\n/g, '<br>')}</p>`;
                 modalHTML += `</div>`;
                 let linksHTML = '';
                 if (eventDetails.websiteUrl && eventDetails.websiteUrl !== '#') linksHTML += `<a href="${eventDetails.websiteUrl}" target="_blank" rel="noopener noreferrer" class="btn"><i class="fas fa-globe"></i> Official Website</a>`;
                 if (eventDetails.prizeListUrl && eventDetails.prizeListUrl !== '#') linksHTML += `<a href="${eventDetails.prizeListUrl}" target="_blank" rel="noopener noreferrer" class="btn" download><i class="fas fa-award"></i> Prize List</a>`;
                 if (eventDetails.scheduleUrl && eventDetails.scheduleUrl !== '#') linksHTML += `<a href="${eventDetails.scheduleUrl}" target="_blank" rel="noopener noreferrer" class="btn" download><i class="fas fa-clock"></i> Schedule</a>`;
                 if (eventDetails.entryFormUrl && eventDetails.entryFormUrl !== '#') linksHTML += `<a href="${eventDetails.entryFormUrl}" target="_blank" rel="noopener noreferrer" class="btn" download><i class="fas fa-file-alt"></i> Entry Form</a>`;
                 if (linksHTML) modalHTML += `<div class="event-links">${linksHTML}</div>`;
                 openModal(modalHTML);
            } else if (modalType === 'forsale' && dataIndex !== -1 && dataIndex < saleHorseData.length) {
                 const horse = saleHorseData[dataIndex];
                 currentSlideshowImages = horse.images && horse.images.length > 0 ? horse.images : [horse.primaryImage || 'https://placehold.co/600x400/cccccc/ffffff?text=No+Image'];
                 currentSlideshowIndex = 0;
                 let modalHTML = `<h2>${horse.registeredName || 'Horse Details'}</h2>`;
                 if (horse.barnName) modalHTML += `<span class="modal-barn-name">${horse.barnName}</span>`;
                 modalHTML += `<div class="modal-image-slideshow" data-horse-index="${dataIndex}">`;
                 modalHTML += `<div class="modal-main-image-container"><img src="${currentSlideshowImages[currentSlideshowIndex]}" alt="Main photo of ${horse.registeredName || 'horse'}" class="modal-main-image" id="modal-main-img-${dataIndex}" onerror="this.onerror=null; this.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Error'; this.alt='Image loading error';">`;
                 if (currentSlideshowImages.length > 1) modalHTML += `<button class="slideshow-arrow prev" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button><button class="slideshow-arrow next" aria-label="Next image"><i class="fas fa-chevron-right"></i></button>`;
                 modalHTML += `</div>`;
                 if (currentSlideshowImages.length > 1) {
                     modalHTML += `<div class="modal-thumbnail-container">`;
                     currentSlideshowImages.forEach((imgUrl, imgIndex) => modalHTML += `<img src="${imgUrl}" alt="Thumbnail ${imgIndex + 1}" class="modal-thumbnail ${imgIndex === 0 ? 'active' : ''}" data-index="${imgIndex}" onerror="this.style.display='none';">`);
                     modalHTML += `</div>`;
                 }
                 modalHTML += `</div>`;
                 modalHTML += createDetailHTML('Current Home', horse.currentHome, 'fas fa-home');
                 modalHTML += createDetailHTML('Location', `${horse.city || ''}, ${horse.state || ''}`, 'fas fa-map-marker-alt');
                 modalHTML += createDetailHTML('Pedigree', horse.pedigree, 'fas fa-dna', null, true);
                 modalHTML += createDetailHTML('Description', horse.salesPitch, 'fas fa-comment-dots', null, true);
                 modalHTML += createDetailHTML('Show Results', horse.showResults, 'fas fa-trophy', null, true);
                 let contactHTML = '';
                 contactHTML += createDetailHTML('Name', horse.contactName, 'fas fa-user');
                 contactHTML += createDetailHTML('Email', horse.contactEmail, 'fas fa-envelope', 'email');
                 contactHTML += createDetailHTML('Phone', horse.contactPhone, 'fas fa-phone', 'phone');
                 if (contactHTML) modalHTML += `<div class="modal-contact-info"><h4>Contact Information</h4>${contactHTML}</div>`;
                 openModal(modalHTML);
                 setupModalSlideshowListeners();
            }
        }
    });
    function updateSlideshowImage(newIndex) {
        if (!modal) return;
        const mainImage = modal.querySelector('.modal-main-image');
        const thumbnails = modal.querySelectorAll('.modal-thumbnail');
        if (!mainImage || currentSlideshowImages.length === 0) return;
        currentSlideshowIndex = (newIndex + currentSlideshowImages.length) % currentSlideshowImages.length;
        mainImage.src = currentSlideshowImages[currentSlideshowIndex];
        const horseIndexAttr = mainImage.closest('.modal-image-slideshow')?.dataset.horseIndex;
        const horseIndex = horseIndexAttr !== undefined ? parseInt(horseIndexAttr, 10) : -1;
        const horseName = (horseIndex >= 0 && horseIndex < saleHorseData.length) ? saleHorseData[horseIndex].registeredName : 'horse';
        mainImage.alt = `Photo ${currentSlideshowIndex + 1} of ${horseName || 'horse'}`;
        if (thumbnails.length > 0) thumbnails.forEach((thumb, idx) => thumb.classList.toggle('active', idx === currentSlideshowIndex));
    }
    function showNextImage() { updateSlideshowImage(currentSlideshowIndex + 1); }
    function showPrevImage() { updateSlideshowImage(currentSlideshowIndex - 1); }
    function setupModalSlideshowListeners() {
        if (!modal) return;
        const prevArrow = modal.querySelector('.slideshow-arrow.prev');
        const nextArrow = modal.querySelector('.slideshow-arrow.next');
        if (prevArrow) prevArrow.addEventListener('click', showPrevImage);
        if (nextArrow) nextArrow.addEventListener('click', showNextImage);
        const slideshowContainer = modal.querySelector('.modal-image-slideshow');
        if (slideshowContainer && currentSlideshowImages.length > 1) {
             slideshowContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
             slideshowContainer.addEventListener('touchmove', handleTouchMove, { passive: true });
             slideshowContainer.addEventListener('touchend', handleTouchEnd);
        }
    }
    function handleModalKeydown(event) {
         if (modal && modal.style.display === 'block') {
            if (event.key === "ArrowLeft" && modal.querySelector('.modal-image-slideshow')) showPrevImage();
            else if (event.key === "ArrowRight" && modal.querySelector('.modal-image-slideshow')) showNextImage();
            else if (event.key === "Escape") closeModal();
        }
    }
    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal-thumbnail') && event.target.closest('#detail-modal')) {
            const newIndex = parseInt(event.target.getAttribute('data-index') ?? '0', 10);
            if (!isNaN(newIndex)) updateSlideshowImage(newIndex);
        }
    });
    function handleTouchStart(event) { touchStartX = event.touches[0].clientX; touchEndX = touchStartX; }
    function handleTouchMove(event) { touchEndX = event.touches[0].clientX; }
    function handleTouchEnd() {
        const distance = touchStartX - touchEndX;
        if (Math.abs(distance) > 50) { if (distance > 0) showNextImage(); else showPrevImage(); }
        touchStartX = 0; touchEndX = 0;
    }
    if (closeModalButton) closeModalButton.addEventListener('click', closeModal);
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    if (emailSignupForm) {
        const submitButton = emailSignupForm.querySelector('button[type="submit"]');
        const originalButtonHTML = submitButton ? submitButton.innerHTML : '<i class="fas fa-paper-plane"></i> Subscribe';
        emailSignupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const emailInput = document.getElementById('signup-email');
            if (!submitButton) return;
            if (!emailInput || !emailInput.value.trim() || !emailInput.checkValidity()) {
                if (signupStatus) { signupStatus.textContent = "Please enter a valid email address."; signupStatus.className = 'signup-status error'; }
                emailInput?.focus();
                submitButton.innerHTML = originalButtonHTML; submitButton.disabled = false; return;
            }
            const scriptURL = 'https://script.google.com/macros/s/AKfycbwVPJb_W1XG0oMHtGvL5WFaxp_iSL3GcSLxFnJKu758T_W1RbZuY650qH4JQjv_6tCa/exec';
            const formData = new FormData(emailSignupForm);
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...'; submitButton.disabled = true;
            if (signupStatus) { signupStatus.textContent = ''; signupStatus.className = 'signup-status'; }
            fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' })
            .then(() => {
                console.log('Success (assumed due to no-cors response)');
                submitButton.innerHTML = '<i class="fas fa-check"></i> Thanks for Subscribing!';
                emailSignupForm.reset();
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                submitButton.innerHTML = originalButtonHTML; submitButton.disabled = false;
                if (signupStatus) { signupStatus.textContent = `Error: Could not subscribe. Please try again.`; signupStatus.className = 'signup-status error'; }
            });
        });
    }

    // --- Footer Year ---
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    // --- Initializations ---
    updateActiveNavLink();
});
