export default function Post(){
    return(
        <div className="post">
        <div className="image">
        <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1239&q=80" alt=""/>
        </div>
        
        <div className="texts">
        <h2>I went out on my deck during a sunset this past Summer of 2016. I had my camera, some fruit and colored paper sheets. The rest is history.</h2>
        <p className="info">
          <a className="author">Diogo Raposo</a>
          <time>2023-01-06 16:45</time>
        </p>
        <p className="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices, eros in elementum tincidunt, dui magna rutrum tellus, quis consectetur enim ante vel ligula.
           Ut feugiat erat sodales, tincidunt lectus sed, ullamcorper enim. Ut ullamcorper lacinia pellentesque. Quisque et luctus dui. In sit amet magna nibh. Suspendisse ut arcu 
           sodales, dignissim dui quis, imperdiet urna. Nulla vitae dapibus nibh.</p>
        </div>        
      </div>

    );
}