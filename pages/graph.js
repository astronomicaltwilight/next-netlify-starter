// pages/graph.js
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function GraphPage() {
    const d3Container = useRef(null);

    useEffect(() => {
        if (d3Container.current) {
            const svg = d3
                .select(d3Container.current)
                .append('svg')
                .attr('width', 500)
                .attr('height', 300);

            svg
                .append('circle')
                .attr('cx', 150)
                .attr('cy', 150)
                .attr('r', 100)
                .attr('fill', 'skyblue');
        }
    }, []);

    return (
        <main>
            <h1>D3 Graph Example</h1>
            <div ref={d3Container}></div>
        </main>
    );
}