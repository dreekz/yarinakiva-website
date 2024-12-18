// כאשר ה-DOM נטען במלואו
document.addEventListener('DOMContentLoaded', function() {
    // ניהול תפריט מובייל
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // אם קיימים האלמנטים של תפריט המובייל
    if (menuToggle && mobileMenu) {
        // הוספת אירוע לחיצה על כפתור התפריט
        menuToggle.addEventListener('click', function(e) {
            // מניעת התפשטות האירוע למסמך
            e.stopPropagation();
            // הוספה/הסרה של מחלקת hidden לתפריט
            mobileMenu.classList.toggle('hidden');
        });

        // סגירת תפריט בלחיצה מחוץ לתפריט
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // סגירת תפריט מובייל בעת לחיצה על לינק
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            // הסתרת התפריט לאחר לחיצה על לינק
            mobileMenu.classList.add('hidden');
            // גלילה חלקה למיקום המבוקש
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ניהול מודל לתעודות
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content img');
    const closeModal = document.querySelector('.close-modal');
    const certificateImages = document.querySelectorAll('.certificate-card img');

    // הוספת אירוע לחיצה לכל תמונת תעודה
    certificateImages.forEach(img => {
        img.addEventListener('click', function() {
            // הצגת התמונה במודל
            modalImg.src = this.src;
            modal.classList.add('active');
            // מניעת גלילה ברקע
            document.body.style.overflow = 'hidden';
        });
    });

    // סגירת המודל בלחיצה על כפתור הסגירה
    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
        // החזרת אפשרות הגלילה
        document.body.style.overflow = 'auto';
    });

    // סגירת המודל בלחיצה על הרקע
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});