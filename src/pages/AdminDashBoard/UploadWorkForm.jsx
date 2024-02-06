import Swal from "sweetalert2";

const UploadWorkForm = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const voluntaryName = form.name.value;
        const eventDate = form.date.value;
        const eventTime = form.time.value;
        const imgUrl = form.url.value;
        const description = form.description.value;

        const uploadWork = {voluntaryName, eventDate, eventTime, imgUrl, description};
        console.log(uploadWork)
        // send data to server(post)
        fetch('http://localhost:5000/volunteers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(uploadWork)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'The Voluntary Activity is successfully added to DB',
                    icon: 'success',
                    confirmButtonText: 'Keep Rocking'
                  })
                form.reset();
            }
        })
    }
    return (
        <div className=""> 
            <h3 className="text-3xl font-bold text-center text-blue-950">Add An Voluntary Work</h3>
            <form onSubmit={handleSubmit}  className='p-4 mt-12 rounded-md  bg-white'>
                <div className='md:flex justify-center gap-5 pb-4 '>
                    <div >
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Event Title</span> <br />
                            <input className='px-4 rounded-sm input input-bordered bg-white w-96 py-1' type="text" name="name" id="name " placeholder=' Enter Event Title' required />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Event Date</span> <br />
                            <input className='px-4 input input-bordered rounded-sm w-96 bg-white py-1' type="date" name="date" id="date" placeholder='Enter coffee Supplier' required />
                        </label>
                    </div>
                </div>
                <div className='md:flex justify-center gap-4 pb-4'>
                    <div>
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>event Time</span> <br /></label>
                        <input className='px-4 input input-bordered  rounded-sm w-96 bg-white py-1' type="text" name="time" id="time" placeholder='Enter event Time' required />
                    </div>
                    <div>
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Description</span> <br /></label>
                        <textarea className="px-4 input input-bordered  rounded-sm w-96 bg-white" name="description" id="" placeholder="Enter Description" cols="30" rows="10"></textarea>
                    </div>
                    
                </div>
                <div className='pb-4'>
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Banner</span> <br /></label>
                        <input className='px-4 input input-bordered  w-full rounded-sm bg-white py-1' type="url" name="url" id="url" placeholder='Enter image url' required />
                    </div>
                <button type="submit" className="btn px-8 bg-stone-700">Submit</button>
            </form>
        </div>
    );
};

export default UploadWorkForm;