// script.js - Final Touches v6 - Button Status Update

document.addEventListener('DOMContentLoaded', function() {

    // --- Data ---
    // Directory Data (Add more entries as needed)
    const directoryData = [
         { Name: "Primus Morgans", Address: null, City: "Manchester", State: "MI", Email: "primusmorgans@gmail.com", Phone: "(517) 962-8149", Website: "mcgofffarm.com", Trainer: null, Focus: "Breeding traditional, \"old blooded\" Morgan horses, emphasizing the breed's original all-around versatility and capability.", Overview: "Primus Morgans, located in Manchester, Michigan, bases its breeding program on the ideal of the original Morgan horse – described by the farm as an unrivaled, all-around 'doing' animal... [Full Overview Text]" },
        { Name: "Ancan Morgans", Address: null, City: "Davison", State: "MI", Email: "AncanMrgns@aol.com", Phone: null, Website: "ancanmorgans.com", Trainer: null, Focus: "Breeding beautiful, versatile Morgans with exceptional conformation and temperaments.", Overview: "Ancan Morgans is dedicated to breeding beautiful, conformationally correct Morgan horses with willing dispositions... [Full Overview Text]" },
        { Name: "Crystal Farms Equestrian Center", Address: null, City: "Marshall", State: "MI", Email: "crystalfarms12@gmail.com", Phone: "(269) 317-3910", Website: "crystalfarmsonline.com", Trainer: "Mary Carlton", Focus: "Training and instruction for Morgan horses and riders across multiple disciplines (Saddle Seat, Hunt Seat, Western), from beginner lessons to World Championship competition.", Overview: "Crystal Farms, a family-owned and operated equestrian facility since 1965, is a premier destination for Morgan horse training... [Full Overview Text]" },
        { Name: "Mtn Top Morgans", Address: null, City: "Brooklyn", State: "MI", Email: "mtntopmorgans@yahoo.com", Phone: "(517) 414-6095", Website: "mtntopmorgans.tripod.com", Trainer: "Kristal Homoki", Focus: "Breeding classic, versatile Morgan horses emphasizing foundation bloodlines, correct conformation, intelligence, and temperament.", Overview: "Mtn Top Morgans, located in Brooklyn, Michigan, represents a third generation dedicated to breeding the versatile Morgan horse... [Full Overview Text]" },
        { Name: "Twin Elm Training", Address: null, City: "Northville", State: "MI", Email: "twinelmtraining@gmail.com", Phone: "(248) 697-6503", Website: "twinelmtraining.com", Trainer: "Bobbie Jo Jaakkola", Focus: "Full-service training and lesson program, specializing in Morgans, offering instruction across multiple disciplines (Saddle Seat, Hunt Seat, Western, Dressage) for beginner to national levels.", Overview: "Established in 2004 and located on 40 acres in Northville since 2011, Twin Elm Training offers a comprehensive lesson and training program... [Full Overview Text]" },
        { Name: "Lookaway Farm", Address: null, City: "Medina", State: "OH", Email: "info@lookawayfarm.com", Phone: "(330) 620 8106", Website: "lookawayfarm.com", Trainer: "Brian Stewart", Focus: "Full-service breeding, training, showing, lessons, and camps with a family atmosphere.", Overview: "Lookaway Farm proudly continues a tradition of breeding, training, and showing winning Morgan horses for over 40 years... [Add Full Overview]" },
        { Name: "Rodman Stables, LLC", Address: null, City: "Homerville", State: "OH", Email: null, Phone: "330.242.3081", Website: "rodmanstables.com", Trainer: "Yvonne Rodman-Sopata", Focus: "Training and lessons, helping clients enjoy the Morgan horse.", Overview: "Rodman Stables provides training and lessons tailored to help you enjoy the Morgan horse... [Add Full Overview]" },
        { Name: "TRSW Morgans at Someday Farm", Address: null, City: "Kent", State: "OH", Email: "swalker@trswmorgans.com", Phone: "330.677.4378", Website: "trswmorgans.com", Trainer: "Terry Rutledge & Susan Walker", Focus: "Breeding focused on Serenity bloodlines, training, and sales.", Overview: "At TRSW Morgans, we strive to perpetuate the Serenity bloodlines and breed horses with natural action, intelligence, and Morgan beauty... [Add Full Overview]" },
        // Add more directory entries here
    ];

    // Horses For Sale Data (Added contact fields)
    const saleHorseData = [
        {
            registeredName: "Ancan True Grit", barnName: "Maverick", state: "MI", city: "Davison",
            currentHome: "Ancan Morgans",
            primaryImage: "https://placehold.co/600x400/0a9396/white?text=Maverick+Photo+1",
            images: [ "https://placehold.co/600x400/0a9396/white?text=Maverick+Photo+1", "https://placehold.co/600x400/005f73/white?text=Maverick+Photo+2", "https://placehold.co/600x400/94d2bd/black?text=Maverick+Photo+3" ],
            pedigree: "Sire: Astronomicallee\nDam: Ancan Color Guard",
            salesPitch: "Stunning 2020 bay gelding with exceptional presence and trainability. Maverick shows promise for the western pleasure division, with smooth gaits and a willing attitude. Handled daily, good ground manners. Ready to start his show career.",
            showResults: "2024 Michigan Futurity - Top 5 Western Pleasure Prospect In-Hand.",
            contactName: "Anne Wyland", // Added Contact Info
            contactEmail: "AncanMrgns@aol.com",
            contactPhone: null // Example: No phone provided
        },
        {
            registeredName: "Lookaway's Leading Lady", barnName: "Diva", state: "OH", city: "Medina",
            currentHome: "Lookaway Farm",
            primaryImage: "https://placehold.co/600x400/e9d8a6/005f73?text=Diva+Photo+1",
            images: [ "https://placehold.co/600x400/e9d8a6/005f73?text=Diva+Photo+1", "https://placehold.co/600x400/0a9396/white?text=Diva+Photo+2" ],
            pedigree: "Sire: Ultras Special Agent\nDam: Lookaway's Debutante",
            salesPitch: "Elegant 2019 chestnut mare, perfect for an amateur or junior exhibitor in hunt seat or classic pleasure. Diva is kind, safe, and has extensive professional training. Easy to handle, clip, and trailer.",
            showResults: "2024 Gold Cup Regional - Reserve Champion Jr. Exhibitor Hunter Pleasure 14-17.",
            contactName: "Brian Stewart", // Added Contact Info
            contactEmail: "info@lookawayfarm.com",
            contactPhone: "(330) 620 8106"
        },
        {
            registeredName: "Primus Knight Rider", barnName: "Kit", state: "MI", city: "Manchester",
            currentHome: "Primus Morgans",
            primaryImage: "https://placehold.co/600x400/212529/white?text=Kit+Photo+1",
            images: [ "https://placehold.co/600x400/212529/white?text=Kit+Photo+1" ],
            pedigree: "Sire: Primus Blackhawk Knox\nDam: Primus First Lady",
            salesPitch: "Traditional type 2021 black colt with excellent bone and substance. Kit embodies the classic Morgan versatility. Started lightly under saddle, showing potential for driving, trail, or working disciplines. Bold and intelligent.",
            showResults: null,
            contactName: "Primus Morgans", // Added Contact Info
            contactEmail: "primusmorgans@gmail.com",
            contactPhone: "(517) 962-8149"
        }
        // Add more horse entries here
    ];

    // Event Data (Updated structure with specific links, contact info removed)
    const eventData = {
        "glmha-show-2025": {
            name: "Annual GLMHA Championship Show",
            date: "July 15-17, 2025",
            location: "MSU Pavilion, East Lansing, MI",
            description: "Join us for our premier annual event featuring a full slate of Morgan classes, including performance, equitation, in-hand, and versatility. Fun for the whole family with vendors, social events, and championship awards!",
            prizeListUrl: "/docs/glmha-show-2025-prizelist.pdf", // Example path
            scheduleUrl: "/docs/glmha-show-2025-schedule.pdf", // Example path
            entryFormUrl: "/docs/glmha-show-2025-entry.pdf", // Example path
            websiteUrl: "#", // Example placeholder if no specific site
        },
        "fall-ride-2025": {
            name: "Fall Colors Trail Ride",
            date: "October 5, 2025",
            location: "Brighton Recreation Area, MI",
            description: "Enjoy the beautiful autumn scenery on horseback with fellow Morgan enthusiasts! This is a relaxed, non-competitive trail ride suitable for various skill levels. Potluck lunch afterwards (please bring a dish to share).",
            prizeListUrl: null,
            scheduleUrl: null,
            entryFormUrl: null,
            websiteUrl: null,
        }
        // Add more events here
    };


    // --- DOM Element References ---
    const mainNav = document.getElementById('main-nav');
    const navLinksContainer = mainNav?.querySelector('.nav-links');
    const mobileMenuToggle = mainNav?.querySelector('.mobile-menu-toggle');
    const directoryGridContainer = document.getElementById('directory-grid-container');
    const directoryFilterButtonsContainer = document.querySelector('.directory-filters');
    const forSaleGridContainer = document.getElementById('forsale-grid-container');
    const forSaleFilterButtonsContainer = document.querySelector('.forsale-filters');
    const modal = document.getElementById('detail-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalButton = modal?.querySelector('.close-button');
    const emailSignupForm = document.getElementById('email-signup-form');
    const signupStatus = document.getElementById('signup-status'); // Kept for error messages
    const yearSpan = document.getElementById('current-year');

    // --- State ---
    let currentDirectoryFilter = 'All';
    let currentSaleHorseFilter = 'All';
    let currentSlideshowIndex = 0;
    let currentSlideshowImages = [];
    let touchStartX = 0;
    let touchEndX = 0;

    // --- Navigation Logic ---
    // Smooth scrolling for internal links
    navLinksContainer?.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = mainNav?.offsetHeight ?? 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                // Close mobile menu if open
                if (navLinksContainer.classList.contains('active')) {
                    navLinksContainer.classList.remove('active');
                    mobileMenuToggle?.querySelector('i')?.classList.replace('fa-times', 'fa-bars');
                }
            }
        });
    });

    // Add 'scrolled' class to nav on scroll
    window.addEventListener('scroll', () => {
        mainNav?.classList.toggle('scrolled', window.scrollY > 50);
        updateActiveNavLink();
    });

    // Update active nav link based on scroll position
    function updateActiveNavLink() {
        if (!navLinksContainer) return;
        let currentSectionId = '';
        const sections = document.querySelectorAll('main section[id]');
        const navHeightOffset = (mainNav?.offsetHeight ?? 0) + 10;

        sections.forEach(section => {
            // Check if the top of the section is within the viewport (considering nav offset)
            if (window.pageYOffset >= section.offsetTop - navHeightOffset) {
                currentSectionId = section.getAttribute('id') ?? '';
            }
        });

        // Check if scrolled to the very bottom
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
             // Ensure sections is not empty before accessing the last element
            if (sections.length > 0) {
                 currentSectionId = sections[sections.length - 1].getAttribute('id') ?? '';
            }
        }
        // Check if scrolled near the top
        if (sections.length > 0 && window.pageYOffset < sections[0].offsetTop - navHeightOffset) {
            currentSectionId = 'home'; // Default to home if above the first section
        }

        // Update active class on nav links
        navLinksContainer.querySelectorAll('a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
        });
    }

    // Mobile menu toggle
    if (mobileMenuToggle && navLinksContainer) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars', !navLinksContainer.classList.contains('active'));
                icon.classList.toggle('fa-times', navLinksContainer.classList.contains('active'));
            }
        });
    }

    // --- Directory Filtering and Rendering ---
    function renderDirectory(filter = 'All') {
        if (!directoryGridContainer) return;
        directoryGridContainer.innerHTML = ''; // Clear previous content
        const filteredData = directoryData.filter(farm => filter === 'All' || farm.State === filter);

        if (filteredData.length === 0) {
            directoryGridContainer.innerHTML = '<p>No directory entries found matching the filter.</p>';
            return;
        }

        filteredData.forEach((farm, index) => {
            // Find the original index in the full data array to use in the modal button
            const originalIndex = directoryData.findIndex(item => item.Name === farm.Name && item.City === farm.City);

            const tile = document.createElement('div');
            tile.classList.add('directory-tile');

            // Helper function to create elements (handles null/undefined text)
            const createEl = (tag, cls, txt, html = false) => {
                // Only create element if text content exists (or is 0)
                if (txt === null || typeof txt === 'undefined' || txt === '') return null;
                const el = document.createElement(tag);
                if (cls) el.className = cls;
                if (html) el.innerHTML = txt;
                else el.textContent = txt;
                return el;
            };

            // Append elements only if they are created (have content)
            const h3 = createEl('h3', null, farm.Name);
            if (h3) tile.appendChild(h3);

            const location = createEl('p', 'location', `<i class="fas fa-map-marker-alt"></i> ${farm.City || ''}, ${farm.State || ''}`, true);
            if (location) tile.appendChild(location);

            const focus = createEl('p', 'focus', farm.Focus);
            if (focus) tile.appendChild(focus);

            // Create and append the button
            const btn = createEl('button', 'btn btn-secondary open-modal-button', '<i class="fas fa-info-circle"></i> View Details', true);
            if (btn) {
                btn.setAttribute('data-modal-type', 'directory');
                // Use the original index for consistent modal data retrieval
                btn.setAttribute('data-index', originalIndex.toString());
                tile.appendChild(btn);
            }

            directoryGridContainer.appendChild(tile);
        });
    }

    // Directory filter button event listener
    if (directoryFilterButtonsContainer) {
        directoryFilterButtonsContainer.addEventListener('click', (e) => {
            const target = e.target;
            if (target && target.classList.contains('btn-filter')) {
                directoryFilterButtonsContainer.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
                target.classList.add('active');
                currentDirectoryFilter = target.dataset.filter ?? 'All';
                renderDirectory(currentDirectoryFilter);
            }
        });
    }

    // Initial render of the directory
    if(directoryGridContainer) renderDirectory(currentDirectoryFilter);


    // --- Horses For Sale Filtering and Rendering ---
    function renderSaleHorses(filter = 'All') {
        if (!forSaleGridContainer) return;
        forSaleGridContainer.innerHTML = ''; // Clear previous content
        const filteredData = saleHorseData.filter(horse => filter === 'All' || horse.state === filter);

        if (filteredData.length === 0) {
            forSaleGridContainer.innerHTML = '<p>No horses found matching the filter.</p>';
            return;
        }

        filteredData.forEach((horse) => {
            // Find the original index for the modal button
            const originalIndex = saleHorseData.findIndex(item => item.registeredName === horse.registeredName && item.barnName === horse.barnName);

            const tile = document.createElement('div');
            tile.classList.add('forsale-tile');

            // Image container
            const imgContainer = document.createElement('div');
            imgContainer.className = 'forsale-tile-image';
            const img = document.createElement('img');
            img.src = horse.primaryImage || 'https://placehold.co/600x400/cccccc/ffffff?text=No+Image';
            img.alt = `Photo of ${horse.registeredName || 'horse'}`;
            // Basic image error handling
            img.onerror = function() {
                this.onerror=null; // Prevent infinite loop if placeholder fails
                this.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Error';
                this.alt = 'Image loading error';
            };
            imgContainer.appendChild(img);
            tile.appendChild(imgContainer);

            // Content container
            const contentContainer = document.createElement('div');
            contentContainer.className = 'forsale-tile-content';

            // Helper function (same as in directory)
            const createEl = (tag, cls, txt, html = false) => {
                 if (txt === null || typeof txt === 'undefined' || txt === '') return null;
                const el = document.createElement(tag);
                if (cls) el.className = cls;
                if (html) el.innerHTML = txt;
                else el.textContent = txt;
                return el;
            };

            const h3 = createEl('h3', null, horse.registeredName);
            if (h3) contentContainer.appendChild(h3);

            const barnName = createEl('p', 'barn-name', horse.barnName);
            if (barnName) contentContainer.appendChild(barnName);

            const location = createEl('p', 'location', `<i class="fas fa-map-marker-alt"></i> ${horse.city || ''}, ${horse.state || ''}`, true);
            if (location) contentContainer.appendChild(location);

            // Button
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

    // For Sale filter button event listener
    if (forSaleFilterButtonsContainer) {
        forSaleFilterButtonsContainer.addEventListener('click', (e) => {
             const target = e.target;
            if (target && target.classList.contains('btn-filter')) {
                forSaleFilterButtonsContainer.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
                target.classList.add('active');
                currentSaleHorseFilter = target.dataset.filter ?? 'All';
                renderSaleHorses(currentSaleHorseFilter);
            }
        });
    }

    // Initial render of horses for sale
    if(forSaleGridContainer) renderSaleHorses(currentSaleHorseFilter);


    // --- Modal Logic ---

    // Helper function to create HTML for modal details (label/value pairs)
    function createDetailHTML(label, value, iconClass = null, linkType = null, isTextArea = false, extraClass = '') {
        // Only proceed if value exists (or is 0)
        if (value !== null && typeof value !== 'undefined' && value !== '') {
            let content = '';
            // Format content based on linkType
            if (linkType === 'email') {
                content = `<a href="mailto:${value}">${value}</a>`;
            } else if (linkType === 'phone') {
                content = `<a href="tel:${value}">${value}</a>`;
            } else if (linkType === 'web') {
                // Ensure URL has protocol
                const url = value.startsWith('http://') || value.startsWith('https://') ? value : `http://${value}`;
                content = `<a href="${url}" target="_blank" rel="noopener noreferrer">${value}</a>`;
            } else {
                // Handle potential line breaks in text areas
                content = typeof value === 'string' ? value.replace(/\n/g, '<br>') : value;
            }

            const iconHTML = iconClass ? `<i class="${iconClass}"></i>` : '';

            // Use different structure for larger text areas (like Overview, Description)
            if (isTextArea) {
                return `<div class="modal-detail-section ${extraClass}"><strong>${iconHTML}${label}</strong><p>${content}</p></div>`;
            }
            // Add specific class for contact lines for potential styling
            else if (['Name', 'Email', 'Phone'].includes(label)) {
                // Added colon after label
                return `<p class="modal-contact-line ${extraClass}"><strong>${iconHTML}${label}:</strong> ${content}</p>`;
            }
            // Default structure for other details
            else {
                 // Added colon after label
                return `<p class="${extraClass}"><strong>${iconHTML}${label}:</strong> ${content}</p>`;
            }
        }
        return ''; // Return empty string if no value
    }

    // Function to open the modal and populate its content
    function openModal(content) {
        if (modal && modalBody) {
            modalBody.innerHTML = content; // Set the inner HTML
            modal.style.display = 'block'; // Show the modal
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            // Set focus to the close button for accessibility
            setTimeout(() => closeModalButton?.focus(), 50);
             // Add keydown listener for Escape key
            document.addEventListener('keydown', handleModalKeydown);
        } else {
            console.error("Modal elements not found.");
        }
    }

    // Function to close the modal
    function closeModal() {
        if (modal) {
            modal.style.display = 'none'; // Hide the modal
            if (modalBody) modalBody.innerHTML = ''; // Clear content
            document.body.style.overflow = ''; // Restore background scrolling
            // Remove Escape key listener
            document.removeEventListener('keydown', handleModalKeydown);
            // Remove touch listeners if they were added for a slideshow
            const slideshowContainer = modal.querySelector('.modal-image-slideshow');
            if (slideshowContainer) {
                slideshowContainer.removeEventListener('touchstart', handleTouchStart);
                slideshowContainer.removeEventListener('touchmove', handleTouchMove);
                slideshowContainer.removeEventListener('touchend', handleTouchEnd);
            }
        }
    }

    // Event listener for opening modals (delegated to the body)
    document.body.addEventListener('click', function(event) {
        // Find the closest ancestor button with the specific class
        const button = event.target.closest('.open-modal-button');
        if (button) {
            const modalType = button.getAttribute('data-modal-type');
            const dataIndex = button.getAttribute('data-index');
            const eventId = button.getAttribute('data-event-id');

            // --- Directory Modal ---
            if (modalType === 'directory' && dataIndex !== null) {
                const index = parseInt(dataIndex, 10);
                const farm = directoryData[index];
                if (farm) {
                    let modalHTML = `<h2>${farm.Name || 'Details'}</h2>`;
                    modalHTML += createDetailHTML('Location', `${farm.City || ''}, ${farm.State || ''}`, 'fas fa-map-marker-alt');
                    modalHTML += createDetailHTML('Trainer', farm.Trainer, 'fas fa-user');
                    modalHTML += createDetailHTML('Focus', farm.Focus, 'fas fa-bullseye');
                    modalHTML += createDetailHTML('Phone', farm.Phone, 'fas fa-phone', 'phone');
                    modalHTML += createDetailHTML('Email', farm.Email, 'fas fa-envelope', 'email');
                    modalHTML += createDetailHTML('Website', farm.Website, 'fas fa-globe', 'web');
                    // Use isTextArea=true for the Overview
                    modalHTML += createDetailHTML('Overview', farm.Overview, 'fas fa-info-circle', null, true);
                    openModal(modalHTML);
                }
            }
            // --- Event Modal --- (Contact Section Removed)
            else if (modalType === 'event' && eventId) {
                 const eventDetails = eventData[eventId];
                 if (eventDetails) {
                    // Title section
                    let modalHTML = `<div class="event-modal-title"><i class="fas fa-calendar-check"></i><h2>${eventDetails.name || 'Event Details'}</h2></div>`;

                    // Details section
                    modalHTML += `<div class="event-modal-details">`;
                    modalHTML += createDetailHTML('Date', eventDetails.date, 'fas fa-calendar-alt');
                    modalHTML += createDetailHTML('Location', eventDetails.location, 'fas fa-map-marker-alt');
                    // Add description as a simple paragraph with a specific class
                    if (eventDetails.description) {
                        modalHTML += `<p class="event-description">${eventDetails.description.replace(/\n/g, '<br>')}</p>`;
                    }
                    modalHTML += `</div>`; // End event-modal-details

                    // Links Section - build dynamically
                    let linksHTML = '';
                    if (eventDetails.websiteUrl && eventDetails.websiteUrl !== '#') {
                         linksHTML += `<a href="${eventDetails.websiteUrl}" target="_blank" rel="noopener noreferrer" class="btn"><i class="fas fa-globe"></i> Official Website</a>`;
                    }
                    if (eventDetails.prizeListUrl && eventDetails.prizeListUrl !== '#') {
                         // Added download attribute for PDF links
                         linksHTML += `<a href="${eventDetails.prizeListUrl}" target="_blank" rel="noopener noreferrer" class="btn" download><i class="fas fa-award"></i> Prize List</a>`;
                    }
                     if (eventDetails.scheduleUrl && eventDetails.scheduleUrl !== '#') {
                         linksHTML += `<a href="${eventDetails.scheduleUrl}" target="_blank" rel="noopener noreferrer" class="btn" download><i class="fas fa-clock"></i> Schedule</a>`;
                    }
                     if (eventDetails.entryFormUrl && eventDetails.entryFormUrl !== '#') {
                         linksHTML += `<a href="${eventDetails.entryFormUrl}" target="_blank" rel="noopener noreferrer" class="btn" download><i class="fas fa-file-alt"></i> Entry Form</a>`;
                    }
                    // Add the links container only if there are links
                    if (linksHTML) {
                         modalHTML += `<div class="event-links">${linksHTML}</div>`;
                    }

                    openModal(modalHTML);
                 } else {
                     // Fallback if event data not found
                     openModal(`<h2>Event Details</h2><p>Details for this event could not be found.</p>`);
                 }
            }
            // --- Horse For Sale Modal ---
            else if (modalType === 'forsale' && dataIndex !== null) {
                 const index = parseInt(dataIndex, 10);
                 const horse = saleHorseData[index];
                 if (horse) {
                    // Set up slideshow data
                    currentSlideshowImages = horse.images && horse.images.length > 0
                        ? horse.images
                        : [horse.primaryImage || 'https://placehold.co/600x400/cccccc/ffffff?text=No+Image'];
                    currentSlideshowIndex = 0;

                    // Start building modal HTML
                    let modalHTML = `<h2>${horse.registeredName || 'Horse Details'}</h2>`;
                    if (horse.barnName) {
                        modalHTML += `<span class="modal-barn-name">${horse.barnName}</span>`;
                    }

                    // Slideshow HTML
                    modalHTML += `<div class="modal-image-slideshow" data-horse-index="${index}">`;
                    modalHTML += `<div class="modal-main-image-container">`;
                    // Add error handling directly to the main image as well
                    modalHTML += `<img src="${currentSlideshowImages[currentSlideshowIndex]}" alt="Main photo of ${horse.registeredName || 'horse'}" class="modal-main-image" id="modal-main-img-${index}" onerror="this.onerror=null; this.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Error'; this.alt='Image loading error';">`;
                    // Add arrows only if more than one image
                    if (currentSlideshowImages.length > 1) {
                        modalHTML += `<button class="slideshow-arrow prev" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button>`;
                        modalHTML += `<button class="slideshow-arrow next" aria-label="Next image"><i class="fas fa-chevron-right"></i></button>`;
                    }
                    modalHTML += `</div>`; // End main-image-container
                    // Add thumbnails only if more than one image
                    if (currentSlideshowImages.length > 1) {
                        modalHTML += `<div class="modal-thumbnail-container">`;
                        currentSlideshowImages.forEach((imgUrl, imgIndex) => {
                            // Add error handling to thumbnails too
                            modalHTML += `<img src="${imgUrl}" alt="Thumbnail ${imgIndex + 1}" class="modal-thumbnail ${imgIndex === 0 ? 'active' : ''}" data-index="${imgIndex}" onerror="this.style.display='none';">`; // Hide broken thumbnails
                        });
                        modalHTML += `</div>`; // End thumbnail-container
                    }
                    modalHTML += `</div>`; // End modal-image-slideshow

                    // Horse Details
                    modalHTML += createDetailHTML('Current Home', horse.currentHome, 'fas fa-home');
                    modalHTML += createDetailHTML('Location', `${horse.city || ''}, ${horse.state || ''}`, 'fas fa-map-marker-alt');
                    // Use isTextArea=true for multi-line fields
                    modalHTML += createDetailHTML('Pedigree', horse.pedigree, 'fas fa-dna', null, true);
                    modalHTML += createDetailHTML('Description', horse.salesPitch, 'fas fa-comment-dots', null, true);
                    modalHTML += createDetailHTML('Show Results', horse.showResults, 'fas fa-trophy', null, true);

                    // Contact Info Section
                    let contactHTML = '';
                    contactHTML += createDetailHTML('Name', horse.contactName, 'fas fa-user');
                    contactHTML += createDetailHTML('Email', horse.contactEmail, 'fas fa-envelope', 'email');
                    contactHTML += createDetailHTML('Phone', horse.contactPhone, 'fas fa-phone', 'phone');

                    // Add the contact section only if there's contact info
                    if (contactHTML) {
                        modalHTML += `<div class="modal-contact-info"><h4>Contact Information</h4>${contactHTML}</div>`;
                    }

                    openModal(modalHTML);
                    // Add listeners specifically for the slideshow after opening
                    setupModalSlideshowListeners();
                 }
            }
        }
    });

    // --- Slideshow Logic ---
    // Update the main image and active thumbnail
    function updateSlideshowImage(newIndex) {
        if (!modal) return; // Ensure modal exists
        const mainImage = modal.querySelector('.modal-main-image');
        const thumbnails = modal.querySelectorAll('.modal-thumbnail');

        if (!mainImage || currentSlideshowImages.length === 0) return; // Ensure image and data exist

        // Calculate the new index, wrapping around
        currentSlideshowIndex = (newIndex + currentSlideshowImages.length) % currentSlideshowImages.length;

        // Update the main image source and alt text
        mainImage.src = currentSlideshowImages[currentSlideshowIndex];
        mainImage.alt = `Photo ${currentSlideshowIndex + 1} of ${saleHorseData[parseInt(mainImage.closest('.modal-image-slideshow')?.dataset.horseIndex ?? '0')]?.registeredName || 'horse'}`; // More descriptive alt text

        // Update active class on thumbnails
        if (thumbnails.length > 0) {
            thumbnails.forEach((thumb, idx) => {
                thumb.classList.toggle('active', idx === currentSlideshowIndex);
            });
        }
    }

    // Go to the next image
    function showNextImage() { updateSlideshowImage(currentSlideshowIndex + 1); }
    // Go to the previous image
    function showPrevImage() { updateSlideshowImage(currentSlideshowIndex - 1); }

    // Add event listeners for slideshow controls (arrows, keyboard, touch)
    function setupModalSlideshowListeners() {
        if (!modal) return;
        const prevArrow = modal.querySelector('.slideshow-arrow.prev');
        const nextArrow = modal.querySelector('.slideshow-arrow.next');

        // Click listeners for arrows
        if (prevArrow) prevArrow.addEventListener('click', showPrevImage);
        if (nextArrow) nextArrow.addEventListener('click', showNextImage);

        // Touch listeners for swipe gestures (only if multiple images)
        const slideshowContainer = modal.querySelector('.modal-image-slideshow');
        if (slideshowContainer && currentSlideshowImages.length > 1) {
             // Use { passive: true } for better scroll performance if possible
             slideshowContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
             slideshowContainer.addEventListener('touchmove', handleTouchMove, { passive: true });
             slideshowContainer.addEventListener('touchend', handleTouchEnd);
        }
    }

    // Handle keyboard navigation (Left/Right arrows, Escape) within the modal
    function handleModalKeydown(event) {
         if (modal && modal.style.display === 'block') { // Only act if modal is visible
            if (event.key === "ArrowLeft") {
                // Check if slideshow exists before navigating
                if (modal.querySelector('.modal-image-slideshow')) showPrevImage();
            } else if (event.key === "ArrowRight") {
                if (modal.querySelector('.modal-image-slideshow')) showNextImage();
            } else if (event.key === "Escape") {
                closeModal();
            }
        }
    }

    // Click listener for thumbnails (delegated to body)
    document.body.addEventListener('click', function(event) {
        // Check if the clicked element is a thumbnail inside the modal
        if (event.target.classList.contains('modal-thumbnail') && event.target.closest('#detail-modal')) {
            const newIndex = parseInt(event.target.getAttribute('data-index') ?? '0', 10);
            if (!isNaN(newIndex)) {
                updateSlideshowImage(newIndex);
            }
        }
    });

    // Touch event handlers for swipe
    function handleTouchStart(event) {
        // Store the starting X position of the first touch point
        touchStartX = event.touches[0].clientX;
        touchEndX = touchStartX; // Initialize endX to startX
    }
    function handleTouchMove(event) {
        // Update the ending X position as the finger moves
        touchEndX = event.touches[0].clientX;
    }
    function handleTouchEnd() {
        // Calculate the horizontal distance swiped
        const distance = touchStartX - touchEndX;
        const threshold = 50; // Minimum swipe distance in pixels

        // Check if the swipe distance exceeds the threshold
        if (Math.abs(distance) > threshold) {
            if (distance > 0) {
                // Swiped left (show next image)
                showNextImage();
            } else {
                // Swiped right (show previous image)
                showPrevImage();
            }
        }
        // Reset touch coordinates
        touchStartX = 0;
        touchEndX = 0;
    }

    // --- Modal Close Handlers ---
    // Close button click
    if (closeModalButton) closeModalButton.addEventListener('click', closeModal);
    // Click outside the modal content
    if (modal) modal.addEventListener('click', (e) => {
        if (e.target === modal) { // Check if the click was directly on the modal background
            closeModal();
        }
    });

    // --- Email Signup Form Handler --- (UPDATE: Button text changes)
    if (emailSignupForm) {
        // Store original button content
        const submitButton = emailSignupForm.querySelector('button[type="submit"]');
        const originalButtonHTML = submitButton ? submitButton.innerHTML : '<i class="fas fa-paper-plane"></i> Subscribe'; // Fallback

        emailSignupForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            const emailInput = document.getElementById('signup-email');
            // Ensure we have the button reference
            if (!submitButton) return;

            // --- Validation ---
            if (!emailInput || !emailInput.value.trim() || !emailInput.checkValidity()) {
                if (signupStatus) { // Use status area for validation errors
                    signupStatus.textContent = "Please enter a valid email address.";
                    signupStatus.className = 'signup-status error';
                }
                emailInput?.focus(); // Focus the input field
                // Ensure button is in its original state if validation fails early
                submitButton.innerHTML = originalButtonHTML;
                submitButton.disabled = false;
                return; // Stop submission
            }

            // --- Submission ---
            const scriptURL = 'https://script.google.com/macros/s/AKfycbwVPJb_W1XG0oMHtGvL5WFaxp_iSL3GcSLxFnJKu758T_W1RbZuY650qH4JQjv_6tCa/exec';
            const formData = new FormData(emailSignupForm);

            // Update button to "Subscribing..." state and disable
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
            submitButton.disabled = true;
            // Clear previous status messages
            if (signupStatus) {
                signupStatus.textContent = '';
                signupStatus.className = 'signup-status';
            }

            // Use fetch API to send data
            fetch(scriptURL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // IMPORTANT: Use no-cors for opaque redirects from Apps Script
            })
            .then(response => {
                // 'no-cors' success (assumed)
                console.log('Success (assumed due to no-cors response)');
                // Update button to "Thanks..." state (remains disabled)
                submitButton.innerHTML = '<i class="fas fa-check"></i> Thanks for Subscribing!';
                emailSignupForm.reset(); // Clear the form
            })
            .catch(error => {
                // Network errors or other issues
                console.error('Error submitting form:', error);
                // Revert button to original state and re-enable
                submitButton.innerHTML = originalButtonHTML;
                submitButton.disabled = false;
                // Display error message in the status area below
                if (signupStatus) {
                    signupStatus.textContent = `Error: Could not subscribe. Please try again.`;
                    signupStatus.className = 'signup-status error';
                }
            });
            // Note: No .finally() block needed here as success/error handles button state specifically.
        });
    }

    // --- Footer Year ---
    // Set the current year in the footer
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // --- Initializations ---
    // Update active nav link on page load
    updateActiveNavLink();

}); // End DOMContentLoaded
