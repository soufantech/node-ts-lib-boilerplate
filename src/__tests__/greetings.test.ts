import { Daytime, greet } from '../greetings';

describe('greet', () => {
  test.each([
    [0, Daytime.Night],
    [1, Daytime.Night],
    [5, Daytime.Night],
    [6, Daytime.Morning],
    [7, Daytime.Morning],
    [11, Daytime.Morning],
    [12, Daytime.Morning],
    [13, Daytime.Afternoon],
    [17, Daytime.Afternoon],
    [18, Daytime.Evening],
    [19, Daytime.Evening],
    [20, Daytime.Evening],
    [21, Daytime.Night],
  ])('at %dh, greets "good %s".', (hours, daytime) => {
    const greeting = greet((daytime) => `Good ${daytime}, fella!`, hours);

    expect(greeting).toBe(`Good ${daytime}, fella!`);
  });
});
