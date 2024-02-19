
const Galley =() =>{
     return(
<div class="container mx-auto md:mt-0 mt-96 px-10 bg-teal-500	 py-10 lg:px-32 lg:pt-12">
    <div className="text-center py-6">
        <h1 className="text-4xl text-white font-semibold">
            Gallery
        </h1>
        <p className="text-white my-8">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
    </div>
  <div class="-m-1 flex flex-wrap md:-m-2 md:mx-10">
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://www.shutterstock.com/image-photo/medical-concept-indian-beautiful-female-600nw-1635029716.jpg" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://media.gettyimages.com/id/1302675611/photo/doctor-checking-pulse-rate-of-patient-stock-photo.jpg?s=612x612&w=0&k=20&c=rO0PT78MKwr566iMp3nl6MdJgb-Vi2xE-yMpfU4Ttag=" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://media.gettyimages.com/id/1298800629/photo/portrait-of-confident-male-doctor-looking-at-camera.jpg?s=612x612&w=0&k=20&c=CB3h3a-0yUBgaZHhF2Kd5ibfDv25Qcjsca-ia5gIWUM=" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://media.gettyimages.com/id/1394730444/photo/female-doctor-consoling-worried-senior-man-sitting-on-wheelchair-at-hospital.jpg?s=612x612&w=0&k=20&c=GvyL3S6vMdCYV97TQYylSruWlAWMYZjwmgPXoiMuUsQ=" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://media.gettyimages.com/id/1053401358/photo/female-doctor-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=9X7uj3xCOwNE-PcqPy7VNowiU1BgmDeBCeX6Lg_r8tY=" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://media.gettyimages.com/id/1441979374/photo/medical-team-meeting.jpg?s=612x612&w=0&k=20&c=2DM74ZVh8bv4hS5lbTKTnbozb9pR6-QeIk5zf2SFdoo=" />
      </div>
    </div>
  </div>
</div>
     )
}

export default Galley;