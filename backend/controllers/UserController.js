const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { email, password, name, age, image, address } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, name, age, image, address });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age, image, address } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, age, image, address },
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    res.status(404).json({ error: 'User not found' });
  }
};
