int width;
int height;
background(0,0,0,0);
int frameFrequency = 24;//24 Hz
int selectedLength;
float currentPosition;
float beginPosition;
float maxPosition;
float delta;
int counter = 0;
int counterMax;
frameRate(frameFrequency);
void setSize(int fullWidth, int fullHeight){
    width = fullWidth;
    height = fullHeight;
    size( width, height );
    noLoop();
}
void draw(){
    background(0,0,0,0);
    stroke(152,0,0);
    line(currentPosition,0,currentPosition,height);
    currentPosition += delta;
    counter++;
    if(counter >= counterMax){
        currentPosition = beginPosition;
        counter = 0;
    }
}
//windowSamples is number of samples in window
//currentSample is the start position in samples relative to the first sample in the window
//numberSamplesSelected is number of samples that is selected (aka what is played). This will equal
//windowLength if nothing is selected.
void play(){
    loop();
}
void setupPlay(int windowSamples, int currentSample, int numberSamplesSelected, int sampleRate){
    beginPosition = (currentSample/windowSamples) * width;
    currentPosition= beginPosition;
    counter = 0;
    float duration = (1/sampleRate) * numberSamplesSelected;
    delta = (1/frameFrequency) * (1/duration) * (numberSamplesSelected/windowSamples) * width;//move current position by
    maxPosition = ((currentSample + numberSamplesSelected) / windowSamples) * width;
    counterMax = floor((maxPosition - beginPosition)/delta); //noticed lagging without this counter.  Works perfectly with counter though by math this isn't exact.

    //draw first line
    background(0,0,0,0);
    stroke(152,0,0);
    line(currentPosition,0,currentPosition,height);
}
void stop(){
    noLoop();
}
