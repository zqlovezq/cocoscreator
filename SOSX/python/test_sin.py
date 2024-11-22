import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 6.18, 1000)
y = np.exp(-x/3) * np.sin(3*x)

plt.plot(x, y, ls="-", lw=2, label="plot figure")

plt.legend()

plt.show()