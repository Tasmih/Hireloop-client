"use client";

import { Table } from "@heroui/react";
import { Eye, Pencil, TrashBin } from "@gravity-ui/icons";

export default function JobsTable({ jobs = [] }) {
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Jobs" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Job Title</Table.Column>
            <Table.Column>Type / Category</Table.Column>
            <Table.Column>Location</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Actions</Table.Column>
          </Table.Header>
          <Table.Body>
            {jobs.map((job) => (
              <Table.Row key={job._id}>
                <Table.Cell>
                  <span className="text-white font-medium">{job.title}</span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex flex-col">
                    <span className="text-white text-sm">{job.type}</span>
                    <span className="text-zinc-400 text-xs">{job.category}</span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-zinc-300 text-sm">
                    {job.remote ? "Remote" : `${job.city}, ${job.country}`}
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    job.status === "active"
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "bg-zinc-500/10 text-zinc-400"
                  }`}>
                    {job.status}
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 rounded-lg hover:bg-white/10 transition text-zinc-400 hover:text-cyan-400">
                      <Eye width={16} height={16} />
                    </button>
                    <button className="p-1.5 rounded-lg hover:bg-white/10 transition text-zinc-400 hover:text-yellow-400">
                      <Pencil width={16} height={16} />
                    </button>
                    <button className="p-1.5 rounded-lg hover:bg-white/10 transition text-red-400 hover:text-red-300">
                      <TrashBin width={16} height={16} />
                    </button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}