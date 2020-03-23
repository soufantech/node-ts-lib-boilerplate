export enum Daytime {
  Morning = 'morning',
  Afternoon = 'afternoon',
  Evening = 'evening',
  Night = 'night',
}

export interface Greeter {
  (daytime: Daytime): string;
}

export const greet = (greeter: Greeter, hours: number): string => {
  if (hours >= 6 && hours <= 12) return greeter(Daytime.Morning);
  if (hours > 12 && hours <= 17) return greeter(Daytime.Afternoon);
  if (hours >= 17 && hours <= 20) return greeter(Daytime.Evening);

  return greeter(Daytime.Night);
};
