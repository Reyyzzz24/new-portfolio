import { motion } from "framer-motion";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/20">
      <motion.div
        className="relative w-full max-w-lg bg-white border border-gray-200 shadow-2xl rounded-3xl flex flex-col max-h-[90vh]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        {/* Tombol Close tetap absolute di luar konten scroll */}
        <button
          onClick={closeModal}
          className="absolute z-20 p-2 transition-colors rounded-full top-4 right-4 bg-white/80 text-gray-700 hover:bg-gray-100 backdrop-blur-sm shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header Gambar (Tetap di atas) */}
        <div className="relative h-48 flex-shrink-0 overflow-hidden bg-gray-100 rounded-t-3xl">
          <img src={image} alt={title} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
        </div>

        {/* Konten Scrollable */}
        <div className="p-8 overflow-y-auto">
          <h5 className="text-2xl font-semibold tracking-tight text-gray-900">{title}</h5>

          <div className="mt-6 space-y-4">
            <p className="text-sm leading-relaxed text-gray-600">{description}</p>
            {subDescription.map((subDesc, index) => (
              <p key={index} className="text-sm leading-relaxed text-gray-500">
                {subDesc}
              </p>
            ))}
          </div>
        </div>

        {/* Footer (Tetap di bawah) */}
        <div className="p-8 pt-0 border-t border-gray-100 flex-shrink-0">
          <div className="flex items-center justify-between pt-8">
            <div className="flex gap-2">
              {tags.map((tag) => (
                <div key={tag.id} className="p-2 transition-colors border rounded-lg bg-gray-50 border-gray-200 hover:bg-gray-100">
                  <img src={tag.path} alt={tag.name} className="opacity-80 size-5" />
                </div>
              ))}
            </div>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
            >
              View Project
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;