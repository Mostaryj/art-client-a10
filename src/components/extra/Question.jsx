
const Question = () => {
    return (
        <div>
             <section className=" dark:bg-gray-100 border-2 mt-6 rounded-sm  dark:text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8 ">
          <h2 className="text-2xl text-center font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4  mb-8 text-center dark:text-gray-600">
            Sagittis tempor donec id vestibulum viverra. Neque condimentum
            primis orci at lacus amet bibendum.
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 font-semibold py-6 focus:outline-none focus-visible:dark:ring-violet-600">
               How can I share my own artwork on this page?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600 ">
              We love showcasing the talents of our community members! If you would like to share your artwork with us, please reach out through our contact page or social media channels. We welcome submissions from artists of all skill levels and backgrounds.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 font-semibold py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              Are there any painting and drawing workshops or events coming up?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600 ">
              Stay tuned for announcements about upcoming workshops, demonstrations, exhibitions, and community events hosted by our page. Whether you are interested in learning new techniques, meeting fellow artists, or showcasing your work, there is something for everyone to enjoy.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 font-semibold py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              Can I purchase the paintings and drawings featured on this page?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600 ">
               semper  While some artworks may be available for purchase directly from the artist or through affiliated galleries, others may be displayed for inspiration and admiration purposes only. Please check the individual listings or contact the artist for availability and purchasing information.
              </p>
            </details>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Question;