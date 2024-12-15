function openModal(certType) {
    const modal = document.getElementById('certificate-modal');
    const modalImg = document.getElementById('modal-image');
    
    if (certType === 'ltm-cert') {
        modalImg.src = '../assets/images/ltm-certificate.jpg';
    } else if (certType === 'bigip-cert') {
        modalImg.src = '../assets/images/bigip-certificate.jpg';
    }
    
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('certificate-modal');
    modal.classList.remove('active');
}

document.getElementById('certificate-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});