import React from "react";

export default function UserProfile() {
  return (
    <div className="min-h-svh bg-gray-100">
      <section className="container mx-auto px-4 py-10">
        <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-md">
          {/* Cover Image */}
          <div className="h-80">
            <img
              src="To Love Ru/Frame 1 (1).png"
              alt="Cover image"
              className="w-full h-full object-bottom"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Profile Content */}
          <div className="p-6">
            <div className="flex flex-wrap justify-between items-center gap-6">
              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded overflow-hidden">
                  <img
                    src="To Love Ru/yami.jpg"
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-lg font-semibold text-gray-800">
                    Konjiki no Yami
                  </h6>
                  <p className="text-sm text-gray-600">
                    golden.darkness@gmail.com
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://github.com/Adrian-kodehode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border text-black border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base">GitHub</span>
                </a>
                <button className="flex items-center gap-2 px-4 py-2 border text-black border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  <span className="text-base">Twitter</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border text-black border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  <span className="text-base">Medium</span>
                </button>
              </div>
            </div>

            {/* Bio */}
            <p className="text-gray-600 mt-6">
              Passionate UI/UX designer focused on creating intuitive and
              engaging digital experiences. <br /> Driven by design thinking,
              creativity, and a love for problem-solving.
            </p>

            {/* Profile Stats */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800">24</h4>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800">142</h4>
                <p className="text-sm text-gray-600">Followers</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800">6</h4>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
