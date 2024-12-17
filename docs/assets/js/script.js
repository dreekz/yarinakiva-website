document.addEventListener('DOMContentLoaded', function() {
    // פונקציה לפתיחת המודל
    function openModal(certType) {
        const modal = document.getElementById('certificate-modal');
        const modalImg = document.getElementById('modal-image');
        
        // עדכון נתיב התמונה ללא '../'
        if (certType === 'ltm-cert') {
            modalImg.src = 'assets/images/ltm-certificate.jpg';
        } else if (certType === 'bigip-cert') {
            modalImg.src = 'assets/images/bigip-certificate.jpg';
        }
        
        modal.classList.add('active');
        
        // מניעת גלילה בגוף העמוד כשהמודל פתוח
        document.body.style.overflow = 'hidden';
    }

    // פונקציה לסגירת המודל
    function closeModal() {
        const modal = document.getElementById('certificate-modal');
        modal.classList.remove('active');
        
        // החזרת הגלילה לגוף העמוד
        document.body.style.overflow = '';
    }

    // הוספת מאזיני לחיצה לכרטיסי התעודות
    const certificateCards = document.querySelectorAll('.certificate-card');
    certificateCards.forEach(card => {
        card.addEventListener('click', function() {
            const certType = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            openModal(certType);
        });
    });

    // סגירת המודל בלחיצה מחוץ לתמונה
    const modal = document.getElementById('certificate-modal');
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // סגירת המודל בלחיצה על כפתור הסגירה
    const closeButton = document.querySelector('.close-modal');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // סגירת המודל בלחיצה על ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

// חשיפת הפונקציות לשימוש גלובלי
window.openModal = function(certType) {
    const modal = document.getElementById('certificate-modal');
    const modalImg = document.getElementById('modal-image');
    
    if (certType === 'ltm-cert') {
        modalImg.src = 'assets/images/ltm-certificate.jpg';
    } else if (certType === 'bigip-cert') {
        modalImg.src = 'assets/images/bigip-certificate.jpg';
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
    const modal = document.getElementById('certificate-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
};