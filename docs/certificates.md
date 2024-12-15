## Professional Certifications

<div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    <!-- F5 LTM Certificate -->
    <div class="certificate-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" onclick="openModal('ltm-cert')">
        <img src="assets/images/ltm-certificate.jpg" alt="F5 LTM Certificate" class="w-full h-48 object-cover">
        <div class="p-4">
            <h3 class="text-lg font-semibold">Configuring BIG-IP Local Traffic Manager</h3>
            <p class="text-gray-600">Completed: September 19, 2024</p>
            <p class="text-gray-600">CPE Hours: 21</p>
        </div>
    </div>
    
    <!-- F5 BIG-IP Certificate -->
    <div class="certificate-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" onclick="openModal('bigip-cert')">
        <img src="assets/images/bigip-certificate.jpg" alt="F5 BIG-IP Certificate" class="w-full h-48 object-cover">
        <div class="p-4">
            <h3 class="text-lg font-semibold">Administering BIG-IP</h3>
            <p class="text-gray-600">Completed: September 16, 2024</p>
            <p class="text-gray-600">CPE Hours: 14</p>
        </div>
    </div>
</div>

<!-- Modal for Certificates -->
<div id="certificate-modal" class="modal">
    <div class="modal-content">
        <span class="close-modal" onclick="closeModal()">&times;</span>
        <img id="modal-image" src="" alt="Certificate">
    </div>
</div>