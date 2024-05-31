import React, { useState } from 'react';

class Matrix {
  matrix: string;

  constructor(matrix: string) {
    this.matrix = matrix;
  }

  get rows(): number[][] {
    return this.matrix.split('\n').map(nums => nums.split(' ').map(row => +row));
  }

  get columns(): number[][] {
    return this.rows[0].map((_, index) => this.rows.map(row => row[index]));
  }
}

const MatrixComponent: React.FC = () => {
  const [matrixInput, setMatrixInput] = useState<string>('');
  const [matrixRows, setMatrixRows] = useState<number[][]>([]);
  const [matrixColumns, setMatrixColumns] = useState<number[][]>([]);

  const handleMatrixChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMatrixInput(event.target.value);
  };

  const handleMatrixSubmit = () => {
    const matrix = new Matrix(matrixInput);
    setMatrixRows(matrix.rows);
    setMatrixColumns(matrix.columns);
  };

  return (
    <div>
      <h2>Matrix Component</h2>
      <textarea 
        value={matrixInput}
        onChange={handleMatrixChange}
        placeholder="Enter matrix rows separated by new lines and columns by spaces"
        rows={5}
        cols={30}
      />
      <br />
      <button onClick={handleMatrixSubmit}>Process Matrix</button>
      <div>
        <h3>Rows</h3>
        <pre>{JSON.stringify(matrixRows, null, 2)}</pre>
      </div>
      <div>
        <h3>Columns</h3>
        <pre>{JSON.stringify(matrixColumns, null, 2)}</pre>
      </div>
    </div>
  );
};

export default MatrixComponent;
