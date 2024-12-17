<div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Hero Section -->
    <div id="hero" class="container mx-auto px-4 py-16">
        <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Yarin Akiva
            </h1>
            <p class="text-xl md:text-2xl text-gray-600 mb-8">
                DevOps Engineer & Cloud Solutions Architect
            </p>
            <div class="flex justify-center gap-4">
                <a href="#about" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    Learn More
                </a>
            </div>
        </div>
    </div>

    <!-- About Section -->
    <div id="about" class="container mx-auto px-4 py-16">
        <h2 class="text-3xl font-bold text-center mb-8">About Me</h2>
        <div class="max-w-3xl mx-auto">
            <p class="text-lg text-gray-700 leading-relaxed">
                Hi! I'm Yarin, a DevOps and cloud engineer specializing in AWS infrastructure and F5 technologies. 
                With professional certifications in F5 BIG-IP and experience in cloud architecture, I focus on 
                building robust, scalable infrastructure solutions.
            </p>
        </div>
    </div>

    <!-- Certificates Section -->
    <div id="certificates" class="bg-white py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">Professional Certifications</h2>
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
        </div>
    </div>

    <!-- Projects Section -->
    <div id="projects" class="py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <h3 class="text-xl font-semibold mb-4">Static Website on AWS</h3>
                    <p class="text-gray-600 mb-4">
                        Implemented a static website using AWS S3, CloudFront, and Route 53 with SSL/TLS security.
                    </p>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AWS</span>
                        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">S3</span>
                        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CloudFront</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact Section -->
    <div id="contact" class="bg-gray-800 text-white py-16">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-8">Get in Touch</h2>
            <p class="text-xl text-gray-300 mb-8">
                Interested in collaborating or discussing opportunities?
            </p>
            <a 
                href="mailto:yarin3db@gmail.com" 
                class="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
            >
                Contact Me
            </a>
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
</div>

<footer class="bg-gray-900 text-gray-400 py-8 text-center">
    <p>&copy; 2024 Yarin Akiva. All rights reserved.</p>
</footer>