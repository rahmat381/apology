
const text = `aku itu cowo yang kakuu dan kadang keras kepala, jadi buat berubah itu susah banget buat akuu
tapi aku udah berusaha kok walaupun menurut kamu itu ga jauh beda dari sebelumnya,
jadi aku janji bakal berubah lebih baik kedepannya dan kalo ada dipikiran aku yg ngeganggu aku,
aku bakal nanya in ke kamu buat validasi supaya akunya ga ovt dan ujung2nya bikin salah paham,
jadi aku mohon banget sama kamu supaya kamu nerima maaf aku dan mau kita baikann,
kalo kita baikan tolong bantuinn aku buat ngerubahh, kalo ga dibantu aku bakal susah ngerubahh,
bisa juga tapi pelann2, tapi seandainya kamu emang udah capek banget sama akuu dan mau pure kita temenan aja,
aku hargain keputusan kamuu

kalo kamu mau maafin aku dan kita baikan lagi tanda tanganin yaa kertas tadii, dan foto terus kirim ke aku,
karna aku mau tau aku dimaafin atau engga (aku nyesel banget gaenak hati dan ngerasa bersalah banget atas apa yang aku lakuin ke kamuu,
jangan capek ya sama akuu dan bantuin aku berubah buat jadi lebih baik aku mohon)
semoga kamu ngerti ya sma yang aku bilang inii
#permohonan maaf yang terdalam dari aku R.H.A.`;

let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById('typewriter').innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 30);
  }
}
type();
