## Professional Certifications
<div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    <!-- F5 LTM Certificate -->
    <div class="certificate-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:shadow-xl">
        <img 
            src="assets/images/ltm-certificate.jpg" 
            alt="F5 LTM Certificate" 
            class="w-full h-48 object-cover transition-transform duration-300"
            loading="lazy"
        >
        <div class="p-4">
            <h3 class="text-lg font-semibold">Configuring BIG-IP Local Traffic Manager</h3>
            <p class="text-gray-600">Completed: September 19, 2024</p>
            <p class="text-gray-600">CPE Hours: 21</p>
        </div>
    </div>
    
    <!-- F5 BIG-IP Certificate -->
    <div class="certificate-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:shadow-xl">
        <img 
            src="assets/images/bigip-certificate.jpg" 
            alt="F5 BIG-IP Certificate" 
            class="w-full h-48 object-cover transition-transform duration-300"
            loading="lazy"
        >
        <div class="p-4">
            <h3 class="text-lg font-semibold">Administering BIG-IP</h3>
            <p class="text-gray-600">Completed: September 16, 2024</p>
            <p class="text-gray-600">CPE Hours: 14</p>
        </div>
    </div>
</div>

<!-- Modal for Certificates -->
<div id="certificate-modal" class="modal fixed inset-0 bg-black bg-opacity-85 z-50 hidden items-center justify-center p-4">
    <div class="modal-content relative max-w-4xl mx-auto">
        <button 
            onclick="closeModal()" 
            class="close-modal absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 transition-colors duration-200"
            aria-label="Close modal"
        >&times;</button>
        <img id="modal-image" src="" alt="Certificate" class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl">
    </div>
</div>

<script>
document.querySelectorAll('.certificate-card').forEach(card => {
    card.addEventListener('click', function() {
        const img = this.querySelector('img');
        openModal(img.src.includes('ltm-certificate') ? 'ltm-cert' : 'bigip-cert');
    });
});
</script>