
export default function YoutubeVideoContainer(){

    return (
        <div className="youtube-video-container" style={{zIndex:99, margin:"30px auto"}}>            
             <iframe 
                width="560"
                height="315" 
                src="https://www.youtube.com/embed/OjGy76WMjrg?si=Wo-J-Sj7yrGcuWi3" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                
             >
             </iframe>
            </div>
    )
}