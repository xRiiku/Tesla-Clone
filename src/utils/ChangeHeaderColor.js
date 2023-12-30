export function ChangeHeaderColor(){
    const headerEl = document.querySelector("#landing-header")

        const observerOptions = {
        root: null,
        rootMargin: "0px", // en cuanto se vea el elemento
        threshold: 0.9, // porcentaje de visibilidad
        }
    
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const { isIntersecting } = entry
            if (isIntersecting) {
            const color = entry.target.getAttribute("data-header-color")
            headerEl.style.color = color
            }
        })
        }, observerOptions)
    
        const sectionElements = document.querySelectorAll(".landing-section")
        sectionElements.forEach((section) => observer.observe(section))
}
