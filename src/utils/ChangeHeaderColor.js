export function ChangeHeaderColor(){
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.90
    }
    const $header = document.querySelector("#landing-header")
    const observer = new IntersectionObserver(entries => {
    
        entries.forEach(entry =>{
            const {isIntersecting} = entry
            if(isIntersecting){
                const color = entry.target.getAttribute("data-header-color")
                $header.style.color = color
            }
        })
    }, observerOptions)
    
    const $sections = document.querySelectorAll(".landing-section")
    $sections.forEach(section => observer.observe(section))
}
