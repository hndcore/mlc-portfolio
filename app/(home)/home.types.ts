export type HomeStat = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

export type SelectedWork = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type CurrentFocus = {
  role: string;
  company: string;
  description: string;
  tags: string[];
};
