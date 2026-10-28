import React, { useState } from 'react';
import { GYM_REVIEWS, REVIEW_TAGS, GYM_CONTACT } from '../data/gymData';
import { ReviewItem } from '../types/gym';
import { Star, MessageSquarePlus, Check, ThumbsUp, Quote, ExternalLink } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All Reviews');
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [userReview, setUserReview] = useState({ name: '', rating: 5, comment: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const filteredReviews =
    selectedTag === 'All Reviews'
      ? GYM_REVIEWS
      : GYM_REVIEWS.filter((r) => r.tags.includes(selectedTag));

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userReview.name || !userReview.comment) return;
    setSubmitted(true);
    setTimeout(() => {
      setShowAddModal(false);
      setSubmitted(false);
      setUserReview({ name: '', rating: 5, comment: '' });
    }, 2000);
  };

  return (
    <section id="reviews" className="py-24 relative bg-[#080b11] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
              Verified Community Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
              Rated 4.8 Stars By Over <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                470+ Active Members.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              <MessageSquarePlus className="w-4 h-4 text-cyan-400" />
              Write a Review
            </button>
            <a
              href="https://maps.google.com/?q=Infinity+Fitness+Gym+Centrum+Heights+Ahmedabad"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>Google Maps Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Google Maps Score Breakdown Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-700/60 shadow-xl mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Big Score */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
              <div className="text-5xl sm:text-6xl font-extrabold text-white font-['Outfit'] tracking-tight">
                4.8
              </div>
              <div className="flex items-center gap-1 my-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Based on 474 Google Maps verified reviews
              </div>
            </div>

            {/* Right Summary statement from Google Maps */}
            <div className="md:col-span-8">
              <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-1 flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5" />
                Google Maps Review Consensus
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                "People say this gym features a wide variety of modern, well-maintained equipment and offers a clean, hygienic environment. They also highlight the supportive, knowledgeable trainers who provide excellent guidance and personalized plans. Guests mention the positive, motivating atmosphere and the convenience of 24/7 operation."
              </p>
            </div>
          </div>
        </div>

        {/* Review Topic Filter Chips (Matching screenshot tags: supportive trainers, modern equipment, steam bath, etc.) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {REVIEW_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
                selectedTag === tag
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-sm'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev: ReviewItem) => (
            <div
              key={rev.id}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-800/80 hover:border-slate-700"
            >
              <div>
                {/* Header with avatar, author, stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center text-white font-bold text-sm shadow">
                      {rev.avatarInitial}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        {rev.author}
                        {rev.isLocalGuide && (
                          <span className="text-[10px] text-cyan-400 font-normal bg-cyan-950/70 border border-cyan-800/40 px-1.5 py-0.5 rounded">
                            Local Guide
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {rev.reviewsCount ? `${rev.reviewsCount} reviews · ` : ''}{rev.date}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Comment text */}
                <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Tags footer */}
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-800/60">
                {rev.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Review Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel w-full max-w-md rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl animate-in zoom-in-95 duration-200">
            <h3 className="text-xl font-bold text-white font-['Outfit'] mb-2">
              Review Infinity Fitness Gym
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Share your workout experience at Centrum Heights, Ahmedabad.
            </p>

            {submitted ? (
              <div className="p-6 text-center text-emerald-400 bg-emerald-950/30 rounded-xl border border-emerald-500/20">
                <Check className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm font-bold">Thank you for your feedback!</div>
                <div className="text-xs text-slate-300 mt-1">Your review will appear shortly.</div>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={userReview.name}
                    onChange={(e) => setUserReview({ ...userReview, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full glass-input px-3.5 py-2.5 rounded-lg text-sm text-white placeholder-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setUserReview({ ...userReview, rating: star })}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= userReview.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Review
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={userReview.comment}
                    onChange={(e) => setUserReview({ ...userReview, comment: e.target.value })}
                    placeholder="Describe the gym equipment, steam bath, trainers, or 24/7 convenience..."
                    className="w-full glass-input px-3.5 py-2.5 rounded-lg text-sm text-white placeholder-slate-500 resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg shadow"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
