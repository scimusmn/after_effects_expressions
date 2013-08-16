txt = value;
n = 0;
if (thisLayer.marker.numKeys > 0){
  n = thisLayer.marker.nearestKey(time).index;
  q = thisLayer.marker.nearestKey(time).index;
  if (thisLayer.marker.key(n).time > time) {
    n--;
    q--;
  }
  if (n = 1) txt = thisLayer.marker.key(n).comment;
  if (q > 1) txt = 1850+(q*10);
}
txt;

