**task:**

- Match “this image” by indexing and changing values of the vector you just created.

![](canvas.jpg)

**task:**

- Take a screenshot of what you did.

### **The RGBA Struct**

Now, it's time to spice things up!

Let's change the canvas to a colorful one. Instead of a std::vector of numbers, we will want a std::vector of something that contains all 4 values of r,g,b,a.

#### Our CS1230 RGBA Struct

To group several related variables into one place, we should create a Struct.

Recall what you learned in Lab01 about structures and how to create them.

A naïve RGBA structure should have 4 members: red, green, blue, and alpha. We give you a simple example of how to define it below:

```c++
#ifndef NAIVE_RGBA
#define NAIVE_RGBA

struct NaiveRGBA
{
	int r;
	int g;
	int b;
	int a;
}
#endif
```

**task:**

Try defining a RGBA structure in your own code by copying the above code into a new header file.

To create a new file in Qt, right click on the left-side 'Project' bar, and select "Add New"

You should see an interface asking you to choose which kind of new file you want to add. In our task, you should select C/C++ header file.

[Screenshot]

Next, follow the interface instructions, define the name and location of your header file, and in project management section, select 'Done'. You should see a new header file appear in your chosen location after a few seconds.

[screenshot] [screenshot]

(My Qt tabs are in Chinese, need to find a English version to make screen shots)

<details>
  <summary>What does these all mean?</summary>

_Your structure is defined between_

```
#ifndef NAIVE_RGBA
#define NAIVE_RGBA
```

_and_

```
#endif
```

_'NaiveRGBA' is its name_

_Variables between brackets(int r; int g; int b; int a;) are its member variables_

_To make your life easier, you can also create member functions that works on the data members of the structure._

_(Examples of member function)_

</details>

To use the structure you just defined, you can simply include the header file at the top lines of your code and use it.

You don't have to do it here, as we have implemented a more complex RGBA structure for you in [location], and linked it for you.

<details>
  <summary>Array of struct</summary>

_An array is a collection of data items of the same type. So, just like ints, floats, chars etc., structs can be put into an array too._

In this course, we put RGBA structures into an array to make up our canvas, like shown below:

_canvas:_

| RGBA | RGBA | RGBA | ... | RGBA |
| ---- | ---- | ---- | --- | ---- |

_You can define a std::vector of RGBA structs like this:_

```c++
std::vector<RBGA> rgbaArray
```

_or you can allocate an array of RGBA like this (suppose you have a canvas of 10x10):_

```
RGBA rgbaCArray[100]
```

When an element in the array, for instance, rgbaArray[10] gets accessed, it returns the RGBA value at row 1, column 0

</details>

<details>
  <summary>Extra Info: struct of arrays</summary>

_Alternatively, you can also create a structure of arrays(this example assumes there are 10 x 10 pixels on a canvas):_

canvas:

| red | red | red | ... | red |
| --- | --- | --- | --- | --- |

| green | green | green | ... | green |
| ----- | ----- | ----- | --- | ----- |

| blue | blue | blue | ... | blue |
| ---- | ---- | ---- | --- | ---- |

| alpha | alpha | alpha | ... | alpha |
| ----- | ----- | ----- | --- | ----- |

_In code, the canvas as allocated like this:_

```C++
struct canvas {
	int r[100];
	int g[100];
	int b[100];
	int a[100];
};
```

_So r[0] represent the red intensity of pixel (0,0), g[0] represents the green intensity of pixel(0,0), and so on..._

\*The canvas we use in this class is an array of RGBA, but you are welcome to learn about the other one here: [Array of Structures vs. Array within a Structure in C/C++ - GeeksforGeeks](https://www.geeksforgeeks.org/array-of-structures-vs-array-within-a-structure-in-c-and-cpp/#:~:text=Below is the tabular difference between the Array,a%2C b%2C c%3B } students [ ... )

</details>

#### Your Mission

Now, let's switch to a canvas that allows us to use colors!

**Task:**

- Modify your previous code to create a canvas with colors instead of grayscale only.

Consider the type of variable you want your std::vector to have.

- Set the initial values of RGBA to (0,123,123,1)

**Task:**

- Display the canvas by passing the vector to `displayGrayCanvas()` at [location]
- Compile and run the code with command line input of [...]

What is color of your canvas now?

**task**:

Now, in `drawFlower(vec2 xy)` at [code location], try changing the pixel at coordinate (x,y) to something other than the initial value. You should work out what its index should be.

**Task:**

Try making the function draw a flower with colorful center and petals, sort of like the example below(You can decide the color yourself):

![](bunch-colorful.jpg)

task :

- You can call `drawFlower(vec2 xy)` multiple times and change x,y coordinates to create more pixel flowers.

- take a screenshot of your creation

## The Pencil Tool

Hope you had a little fun drawing flowers! Now, Instead of modifying a 2D canvas in code, we want to be able to modify it _interactively_.

### CanvasWidget

The key to interactivity in Qt is events.

When events associated with particular _signals_ occur*,* Qt calls functions called _slots_. You don’t need to know how to use these, of course—we’ll (do our best to) handle everything Qt-related for you.

In this class, we will set up the functions that gets called when events occur for you, and you need to fill these functions.

### Pencil

The functions `MouseDown()`, `MouseMove()`, and `MouseUp()` are called to change the canvas when the user interacts with the canvas with their cursor/mouse, we will Implement the event handlers in X file

#### A Note On How To Survive A Weird Compromise: C Arrays

Though we recommend using std::vector (and std::array) for all your canvas needs, Qt’s canvas … so we’ll use C arrays here. However! It’s used the same way.

</details>

<details>
  <summary>Want to know why Qt does this?</summary>

We don’t know.

</details>

_Images displayed in QT have to be a type called 'QImage', and they are defined to be C arrays. Unfortunately, this implementation is hard to circumvent, so you have to work with C arrays when dealing with QT._

[By calling canvas->data], your program returns a pointer to the array of canvas pixels, which are RGBA structs. Your [] function returns a xy coordinate of your mouse in canvas space. Again, you need to work on solving the index for your pixel, and find a way to modify it.

####2 Leaky Pencil

Implement `pencilMove` such that it colors the pixel it’s currently on.

####3 Good Pencil

Implement `pencilDown` and `pencilUp` such that the pencil only colors pixels when the mouse is held down.

A Boolean variable in pencil class may be useful.

HINT: What happens when you click without moving?

## Conclusion

Prepare the two screenshots and your good pencil to get checked off!
