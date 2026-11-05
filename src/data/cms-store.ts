"use client";

import { useEffect, useState } from "react";
import {
  initialEvents,
  initialProjects,
  initialTeamMembers,
  initialClubStats,
  ClubEvent,
  ClubProject,
  TeamMember,
  ClubStats,
} from "./club-data";

const CMS_STORAGE_KEY = "devs_rec_cms_data_v1";

export interface CMSData {
  announcement: string;
  stats: ClubStats;
  events: ClubEvent[];
  projects: ClubProject[];
  team: TeamMember[];
}

export const defaultCMSData: CMSData = {
  announcement: "🚀 Devathon 2025 Registrations are officially LIVE! Register your 3-4 person team today.",
  stats: initialClubStats,
  events: initialEvents,
  projects: initialProjects,
  team: initialTeamMembers,
};

export function getStoredCMSData(): CMSData {
  if (typeof window === "undefined") return defaultCMSData;
  try {
    const raw = localStorage.getItem(CMS_STORAGE_KEY);
    if (!raw) return defaultCMSData;
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to parse CMS data from localStorage", e);
    return defaultCMSData;
  }
}

export function saveStoredCMSData(data: CMSData): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event("cms-storage-updated"));
  } catch (e) {
    console.error("Failed to save CMS data to localStorage", e);
  }
}

export function useCMSData() {
  const [data, setData] = useState<CMSData>(defaultCMSData);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setData(getStoredCMSData());
    setIsLoaded(true);

    const handleUpdate = () => {
      setData(getStoredCMSData());
    };

    window.addEventListener("cms-storage-updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener("cms-storage-updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const updateData = (newData: CMSData) => {
    saveStoredCMSData(newData);
    setData(newData);
  };

  const resetData = () => {
    saveStoredCMSData(defaultCMSData);
    setData(defaultCMSData);
  };

  return { data, isLoaded, updateData, resetData };
}
