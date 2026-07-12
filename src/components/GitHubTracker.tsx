import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Users, BookOpen, Star, Sparkles, Search, GitPullRequest, GitCommit, Calendar, Flame, Trophy } from 'lucide-react';
import { GitHubStats } from '../types';

export default function GitHubTracker() {
  const [username, setUsername] = useState('joel-atamba');
  const [searchInput, setSearchInput] = useState('');
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch GitHub stats from proxy API
  const fetchGitHubStats = async (userToFetch: string) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/github/${encodeURIComponent(userToFetch)}`);
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error('User not found. Please try another handle.');
        }
        throw new Error('Could not fetch GitHub data.');
      }
      const data = await res.json();
      setStats(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to connect to the profile service.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubStats(username);
  }, [username]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setUsername(searchInput.trim());
    }
  };

  // Generate contributions data for the pixel matrix grid
  const renderContributionGrid = () => {
    if (!stats || !stats.calendar) return null;
    
    return stats.calendar.map((day) => {
      let bgClass = "bg-zinc-900/60 border border-white/5";
      if (day.level === 1) bgClass = "bg-cyan-950/40 border border-cyan-500/10";
      else if (day.level === 2) bgClass = "bg-cyan-800/30 border border-cyan-400/20";
      else if (day.level === 3) bgClass = "bg-amber-950/40 border border-amber-500/20";
      else if (day.level === 4) bgClass = "bg-gradient-to-br from-amber-500 to-red-500 border border-amber-400/30 shadow-[0_0_8px_rgba(245,158,11,0.4)]";

      const dateObj = new Date(day.date);
      const formattedDate = dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });

      return (
        <div
          key={day.date}
          className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-[1.5px] transition-all duration-300 hover:scale-150 hover:z-20 cursor-pointer ${bgClass}`}
          title={`${formattedDate}: ${day.count} ${day.count === 1 ? 'contribution' : 'contributions'}`}
        />
      );
    });
  };

  const renderMonthLabels = () => {
    if (!stats || !stats.calendar) return null;
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const labels: { text: string; colIndex: number }[] = [];
    let lastMonth = -1;
    
    for (let col = 0; col < 53; col++) {
      const dayIndex = col * 7;
      if (dayIndex >= stats.calendar.length) break;
      
      const date = new Date(stats.calendar[dayIndex].date);
      const currentMonth = date.getMonth();
      
      if (currentMonth !== lastMonth) {
        labels.push({ text: months[currentMonth], colIndex: col });
        lastMonth = currentMonth;
      }
    }
    
    return (
      <div className="relative h-4 text-[9px] font-mono text-zinc-500 uppercase mb-1.5 w-full">
        {labels.map((label, i) => (
          <span 
            key={i} 
            className="absolute"
            style={{ left: `${(label.colIndex / 53) * 100}%` }}
          >
            {label.text}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="github" className="py-24 bg-[#070b19] relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-cyan-900/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/15 bg-cyan-500/5 text-cyan-400 text-[10px] font-mono tracking-widest uppercase mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>05 / ANALYTICAL INTEGRATION</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans uppercase"
            >
              GitHub Pulse Tracker
            </motion.h2>
          </div>

          {/* User search bar */}
          <motion.form 
            onSubmit={handleSearchSubmit}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex items-center gap-2"
          >
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Search user profile..." 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="pl-10 pr-4 py-2 w-52 sm:w-64 rounded-xl border border-white/5 bg-[#131e35] text-xs font-semibold text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
            <button 
              type="submit"
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-xs font-bold text-white transition-colors cursor-pointer"
            >
              Analyze
            </button>
          </motion.form>
        </div>

        {/* Dashboard layout */}
        {loading ? (
          <div className="h-96 flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/5 bg-[#0f172a] relative overflow-hidden">
            <div className="w-10 h-10 border-2 border-t-cyan-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Compiling GitHub payload...</span>
          </div>
        ) : error ? (
          <div className="p-12 text-center rounded-2xl border border-red-500/10 bg-[#0f172a] max-w-lg mx-auto">
            <p className="text-red-400 text-sm font-medium mb-4">{error}</p>
            <button 
              onClick={() => { setUsername('joel-atamba'); setSearchInput(''); }}
              className="px-4 py-2 rounded-xl border border-white/5 bg-white/2 text-xs font-bold text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              Reset to Joel Atamba
            </button>
          </div>
        ) : stats ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10"
          >
            {/* Left Column: Profile Card */}
            <div className="lg:col-span-4 rounded-2xl border border-white/5 bg-[#0f172a] p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-sky-500 to-cyan-500" />
              
              <div className="flex items-center gap-4">
                <img 
                  src={stats.avatarUrl} 
                  alt={stats.name} 
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-full border border-white/10"
                />
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide font-sans">{stats.name}</h3>
                  <a 
                    href={`https://github.com/${stats.username}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-cyan-400 flex items-center gap-1 hover:underline mt-0.5"
                  >
                    <Github className="w-3.5 h-3.5 text-zinc-500" />
                    @{stats.username}
                  </a>
                </div>
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm font-normal leading-relaxed">
                {stats.bio}
              </p>

              {/* Counts */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/5">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-white font-mono font-bold text-base">
                    <BookOpen className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{stats.publicRepos}</span>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block mt-1">Repos</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-white font-mono font-bold text-base">
                    <Users className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{stats.followers}</span>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block mt-1">Followers</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-white font-mono font-bold text-base">
                    <Users className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{stats.following}</span>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block mt-1">Following</span>
                </div>
              </div>

              {/* Extra Account creation info */}
              <div className="flex items-center justify-center gap-1.5 pt-4 text-[10px] font-mono text-zinc-600 border-t border-white/5">
                <Calendar className="w-3.5 h-3.5" />
                <span>MEMBER SINCE {new Date(stats.createdAt).getFullYear()}</span>
              </div>
            </div>

            {/* Right Column: Dynamic Analytics */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Box 1: Contributions Pixels Grid & Heatmap */}
              <div className="rounded-2xl border border-white/5 bg-[#0f172a] p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold tracking-wider font-sans text-cyan-400 uppercase">Contribution Calendar</h4>
                  <span className="text-xs font-mono text-zinc-500">{stats.stats.contributions} Commits Last 12 Months</span>
                </div>

                {/* Heatmap Grid Canvas Wrapper */}
                <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                  <div className="min-w-[620px] pr-2">
                    {/* Month labels row */}
                    <div className="flex">
                      <div className="w-6 shrink-0" />
                      <div className="flex-1">
                        {renderMonthLabels()}
                      </div>
                    </div>

                    {/* Main Grid: Weekdays + 53 Columns of 7 Days */}
                    <div className="flex gap-2">
                      {/* Weekday labels */}
                      <div className="grid grid-rows-7 gap-1 text-[8px] font-mono text-zinc-500 select-none w-6 h-[74px] sm:h-[88px] leading-none">
                        <span className="flex items-center">Su</span>
                        <span className="flex items-center" />
                        <span className="flex items-center">Tu</span>
                        <span className="flex items-center" />
                        <span className="flex items-center">Th</span>
                        <span className="flex items-center" />
                        <span className="flex items-center">Sa</span>
                      </div>

                      {/* Heatmap block grid */}
                      <div className="grid grid-flow-col grid-rows-7 gap-1 auto-cols-max h-[74px] sm:h-[88px] flex-1">
                        {renderContributionGrid()}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-600 uppercase tracking-wider pt-2 border-t border-white/5">
                  <span>LESS</span>
                  <div className="flex gap-1.5 items-center">
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-zinc-900/60 border border-white/5" />
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-950/40 border border-cyan-500/10" />
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-800/30 border border-cyan-400/20" />
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-amber-950/40 border border-amber-500/20" />
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-gradient-to-br from-amber-500 to-red-500 border border-amber-400/30 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                  </div>
                  <span>MORE</span>
                </div>

                {/* Streak Dashboard Summary Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/5">
                  <div className="p-4 rounded-xl border border-white/5 bg-white/2">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Total Commits</span>
                    <span className="text-lg sm:text-xl font-bold text-white font-mono mt-1 block">{stats.stats.contributions}</span>
                  </div>
                  <div className="p-4 rounded-xl border border-cyan-500/10 bg-cyan-500/5">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                      Current Streak
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-cyan-400 font-mono mt-1 block">
                      {stats.streaks?.currentStreak || 0} <span className="text-xs text-zinc-500 font-normal">days</span>
                    </span>
                  </div>
                  <div className="p-4 rounded-xl border border-amber-500/10 bg-amber-500/5">
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5 text-yellow-500" />
                      Longest Streak
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-amber-400 font-mono mt-1 block">
                      {stats.streaks?.longestStreak || 0} <span className="text-xs text-zinc-500 font-normal">days</span>
                    </span>
                  </div>
                  <div className="p-4 rounded-xl border border-white/5 bg-white/2">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Daily Average</span>
                    <span className="text-lg sm:text-xl font-bold text-white font-mono mt-1 block">
                      {((stats.stats.contributions || 0) / 365).toFixed(1)} <span className="text-xs text-zinc-500 font-normal">/ day</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Box 2: Stats and Top Languages */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Languages distribution Chart */}
                <div className="rounded-2xl border border-white/5 bg-[#0f172a] p-6 sm:p-8 space-y-6">
                  <h4 className="text-sm font-bold tracking-wider font-sans text-cyan-400 uppercase">Top Languages</h4>
                  
                  <div className="space-y-4">
                    {stats.languages.map((lang) => (
                      <div key={lang.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-zinc-300 font-semibold flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
                            {lang.name}
                          </span>
                          <span className="text-zinc-500 font-mono">{lang.percentage}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000"
                            style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* General Aggregated Stats */}
                <div className="rounded-2xl border border-white/5 bg-[#0f172a] p-6 sm:p-8 flex flex-col justify-between">
                  <h4 className="text-sm font-bold tracking-wider font-sans text-red-400 uppercase mb-6">Analytical Ledger</h4>
                  
                  <div className="space-y-4 flex-grow flex flex-col justify-center">
                    <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                      <span className="text-zinc-500 font-medium uppercase tracking-wide">Total Stars Earned</span>
                      <span className="text-white font-mono font-bold flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                        {stats.stats.totalStars}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                      <span className="text-zinc-500 font-medium uppercase tracking-wide">Aggregate Commit Log</span>
                      <span className="text-white font-mono font-bold flex items-center gap-1">
                        <GitCommit className="w-3.5 h-3.5 text-cyan-400" />
                        {stats.stats.totalCommits}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                      <span className="text-zinc-500 font-medium uppercase tracking-wide">Pull Requests Handled</span>
                      <span className="text-white font-mono font-bold flex items-center gap-1">
                        <GitPullRequest className="w-3.5 h-3.5 text-sky-400" />
                        {stats.stats.totalPRs}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        ) : null}

      </div>
    </section>
  );
}
