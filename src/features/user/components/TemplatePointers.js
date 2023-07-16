function TemplatePointers() {

    const type = localStorage.getItem('type');
    console.log("Type:"+type)
    const typeTitle=type==1?"Admin":type==2?"Committee Member":type==3?"Supervisor":"Student"

    return (
        <>
            <h1 className="text-2xl mt-8 font-bold">{typeTitle} Dashboard</h1>
            {/* <p className="py-2 mt-4">✓ <span className="font-semibold">Job recommendations</span> based on user preferences</p>
            <p className="py-2 ">✓ <span className="font-semibold">Advanced machine learning</span> algorithms for accurate job matching</p>
            <p className="py-2  ">✓ User-friendly <span className="font-semibold">interface</span> for easy navigation</p>
            <p className="py-2  mb-4">✓ <span className="font-semibold">Tailored job suggestions</span> based on user qualifications and experience</p> */}
            {/* In this revised version, the text of the <p> tags has been updated to reflect the job recommendation context. It emphasizes features related to job recommendations, machine learning algorithms, user interface, and personalized suggestions. */}
        </>
    )
}

export default TemplatePointers