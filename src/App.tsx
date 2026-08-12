/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TabType, Article, Project } from './types';
import { Navbar } from './components/Navbar';
import { HomeTab } from './components/HomeTab';
import { AboutTab } from './components/AboutTab';
import { ArticlesTab } from './components/ArticlesTab';
import { ProjectsTab } from './components/ProjectsTab';
import { ArticleModal } from './components/ArticleModal';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import ClickSpark from './components/ClickSpark';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [colorScheme, setColorScheme] = useState<'violet-mint' | 'peach-gold'>('violet-mint');

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
        colorScheme === 'peach-gold' ? 'selection:bg-amber-300 selection:text-black' : 'selection:bg-purple-300 selection:text-black'
      }`}>
        {/* Top Sticky Navbar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={handleTabChange}
          onOpenContact={() => setContactModalOpen(true)}
          colorScheme={colorScheme}
          setColorScheme={setColorScheme}
        />

        {/* Main Content Area based on Active Tab */}
        <main className="flex-grow pt-4">
          {activeTab === 'home' && (
            <HomeTab
              onSelectTab={handleTabChange}
              onOpenArticle={(art) => setSelectedArticle(art)}
              onOpenProject={(proj) => setSelectedProject(proj)}
              onOpenContact={() => setContactModalOpen(true)}
              activeTab={activeTab}
            />
          )}

          {activeTab === 'about' && (
            <AboutTab
              onOpenContact={() => setContactModalOpen(true)}
            />
          )}

          {activeTab === 'articles' && (
            <ArticlesTab
              onOpenArticle={(art) => setSelectedArticle(art)}
            />
          )}

          {activeTab === 'projects' && (
            <ProjectsTab
              onOpenProject={(proj) => setSelectedProject(proj)}
            />
          )}
        </main>

        {/* Footer */}
        <Footer onOpenContact={() => setContactModalOpen(true)} />

        {/* Modals & Lightboxes */}
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <ContactModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
        />
      </div>
    </ClickSpark>
  );
}
