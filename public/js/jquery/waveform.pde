int width;
int height;
int waveStart = 0;
int waveEnd = 0;
int totalWaveLength = 0; //length of overall sample
float[] samples; //contains PCM data of sample
background( 230, 242, 236 );
stroke(152,0,0);
int resolutionScale = 5000;//this is a somewhat random number.  Has good performance and decent waveform visualization. Increase for better resolution (and worse performance), decrease for worse resolution
int xMouse = 0  ;
void addSample(float[] sample, int length){
    samples = sample;
    totalWaveLength = length;
    waveEnd = length;
    drawSample(0, totalWaveLength);
}

void drawSample(int begin, int end){
    float scale = (end - begin) / width;
    int resolution = floor((end - begin)/resolutionScale);
    background( 105, 155, 200);
    for(int i=begin; i<end-1;i=i+resolution){
        line((i-begin)/scale,samples[i]*100+100,(i+resolution - begin)/scale,samples[i+resolution]*100+100);
    }
}
void setSize(int fullWidth, int fullHeight){
    width = fullWidth;
    height = fullHeight;
    size( width, height );
}

int getWaveformStart(){
    return waveStart;
}

int getWaveformEnd(){
    return waveEnd;
}

//    void mouseScrolled() {
//        if (mouseScroll > 0) {
//            zoomIn();
//        } else if (mouseScroll < 0) {
//            zoomOut();
//        }
//    }
void zoomIn(){
    //zoom in by factor of 2. Retrieve new start and end and do boundary checking
    float curLength = waveEnd - waveStart;
    waveEnd = floor(waveStart + curLength/2);
    drawSample(waveStart, waveEnd);
}
void zoomInSelected(int start, int end){
    //zoom in on selection
    waveStart = start;
    waveEnd = end;
    drawSample(waveStart, waveEnd);
}
void zoomOut(){
    //zoom out by factor of 2. Retrieve new start and end and do boundary checking
    float center = waveStart + (waveEnd - waveStart) / 2;
    float curLength = waveEnd - waveStart;
    waveStart = floor(center - curLength);
    waveStart = (waveStart < 0) ? 0: waveStart;

    waveEnd = floor(center + curLength);
    waveEnd = (waveEnd > totalWaveLength) ? totalWaveLength: waveEnd;
    drawSample(waveStart, waveEnd);
}
void clear(){
    background( 230, 242, 236 );
}
